#!/usr/bin/env node
"use strict";

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT_DIR = path.resolve(__dirname, "..");

const REQUIRED_FIELDS = [
  "Scene_ID",
  "Scene_Title",
  "Line_No",
  "Speaker",
  "Japanese_Ruby",
  "Japanese_Plain",
  "English",
];

const KANJI_RE = /[\u4e00-\u9fff]/;
const RT_TAG_RE = /<rt>([\s\S]*?)<\/rt>/g;
const RUBY_TAG_RE = /<\/?ruby>/g;
const VALID_STAGING = new Set(["performed", "joruri-only"]);

function createBrowserContext() {
  const windowObj = {};
  windowObj.window = windowObj;
  const context = vm.createContext({
    window: windowObj,
    console,
  });
  return { context, windowObj };
}

function loadScript(relPath, context, errors, scopeLabel) {
  const absPath = path.join(ROOT_DIR, relPath);
  if (!fs.existsSync(absPath)) {
    errors.push(`[${scopeLabel}] Missing file: ${relPath}`);
    return false;
  }
  let code;
  try {
    code = fs.readFileSync(absPath, "utf8");
  } catch (err) {
    errors.push(`[${scopeLabel}] Failed to read ${relPath}: ${err.message}`);
    return false;
  }
  try {
    vm.runInContext(code, context, { filename: absPath });
    return true;
  } catch (err) {
    errors.push(`[${scopeLabel}] Failed to execute ${relPath}: ${err.message}`);
    return false;
  }
}

function stripRuby(html) {
  return html.replace(RT_TAG_RE, "").replace(RUBY_TAG_RE, "");
}

function findKanjiInRt(html) {
  const hits = [];
  const re = new RegExp(RT_TAG_RE.source, "g");
  let m;
  while ((m = re.exec(html)) !== null) {
    if (KANJI_RE.test(m[1])) {
      hits.push(m[1]);
    }
  }
  return hits;
}

function firstDiffSnippet(a, b) {
  const len = Math.min(a.length, b.length);
  let idx = 0;
  while (idx < len && a[idx] === b[idx]) idx++;
  const start = Math.max(0, idx - 8);
  return `at char ${idx}: ruby-stripped="${a.slice(start, idx + 16)}" vs plain="${b.slice(start, idx + 16)}"`;
}

function padRight(str, width) {
  const s = String(str);
  return s.length >= width ? s : s + " ".repeat(width - s.length);
}

function padLeft(str, width) {
  const s = String(str);
  return s.length >= width ? s : " ".repeat(width - s.length) + s;
}

function main() {
  const errors = [];
  const { context, windowObj } = createBrowserContext();

  // 1. Load data/performances.js
  const perfLoaded = loadScript("data/performances.js", context, errors, "performances.js");
  if (!perfLoaded) {
    printReport([], errors);
    process.exit(1);
  }

  const performances = windowObj.PERFORMANCES;
  if (!Array.isArray(performances) || performances.length === 0) {
    errors.push("[performances.js] window.PERFORMANCES is missing or empty.");
    printReport([], errors);
    process.exit(1);
  }

  windowObj.PERFORMANCE_DATA = windowObj.PERFORMANCE_DATA || {};

  const summaryRows = [];

  // 2. Validate each performance
  for (const perf of performances) {
    const perfId = perf && perf.id ? perf.id : "(unknown)";
    if (!perf || !perf.id) {
      errors.push("[performances.js] Encountered a performance entry without an id.");
      continue;
    }

    // Check dataFile existence (and standalone load if not covered by dataFiles)
    const filesToLoad =
      Array.isArray(perf.dataFiles) && perf.dataFiles.length > 0
        ? perf.dataFiles
        : perf.dataFile
          ? [perf.dataFile]
          : [];

    if (filesToLoad.length === 0) {
      errors.push(`[${perfId}] No dataFile or dataFiles defined in data/performances.js.`);
    }

    if (perf.dataFile) {
      const dfAbs = path.join(ROOT_DIR, perf.dataFile);
      if (!fs.existsSync(dfAbs)) {
        errors.push(`[${perfId}] dataFile missing on disk: ${perf.dataFile}`);
      } else if (!filesToLoad.includes(perf.dataFile)) {
        const isolated = createBrowserContext();
        loadScript(perf.dataFile, isolated.context, errors, `${perfId}:dataFile`);
      }
    }

    // Load dataFiles in order into shared context (including merge.js)
    for (const relFile of filesToLoad) {
      loadScript(relFile, context, errors, perfId);
    }

    const rows = (windowObj.PERFORMANCE_DATA || {})[perfId];
    if (!Array.isArray(rows)) {
      errors.push(`[${perfId}] window.PERFORMANCE_DATA["${perfId}"] is missing or not an array.`);
      continue;
    }

    // Gather defined scenes from performances.js
    const definedScenes = [];
    const definedSceneMap = new Map();
    for (const part of perf.parts || []) {
      for (const scene of part.scenes || []) {
        definedScenes.push(scene);
        definedSceneMap.set(scene.id, scene);
      }
    }

    if (definedScenes.length === 0) {
      errors.push(`[${perfId}] No scenes defined under perf.parts in data/performances.js.`);
    }

    // Group rows by Scene_ID and validate each row
    const rowsByScene = new Map();
    const sceneErrorCounts = new Map();
    const addSceneError = (sceneId, msg) => {
      errors.push(msg);
      sceneErrorCounts.set(sceneId, (sceneErrorCounts.get(sceneId) || 0) + 1);
    };

    for (let idx = 0; idx < rows.length; idx++) {
      const row = rows[idx];
      if (!row || typeof row !== "object") {
        errors.push(`[${perfId}] Row at index ${idx} is not an object.`);
        continue;
      }

      const sceneId = typeof row.Scene_ID === "string" && row.Scene_ID.trim() ? row.Scene_ID : `(row#${idx})`;
      const lineLabel = row.Line_No !== undefined ? `Line ${row.Line_No}` : `index ${idx}`;

      // Required fields
      for (const field of REQUIRED_FIELDS) {
        const val = row[field];
        if (field === "Line_No") {
          if (typeof val !== "number" || !Number.isInteger(val) || val < 1) {
            addSceneError(
              sceneId,
              `[${perfId} / ${sceneId} / ${lineLabel}] Invalid or missing required field "${field}": ${JSON.stringify(val)}`
            );
          }
        } else if (typeof val !== "string" || val.trim().length === 0) {
          addSceneError(
            sceneId,
            `[${perfId} / ${sceneId} / ${lineLabel}] Missing or empty required field "${field}"`
          );
        }
      }

      // Scene_ID matches a scene in performances.js
      if (typeof row.Scene_ID === "string" && row.Scene_ID.trim() !== "") {
        if (!definedSceneMap.has(row.Scene_ID)) {
          addSceneError(
            sceneId,
            `[${perfId} / ${sceneId} / ${lineLabel}] Scene_ID "${row.Scene_ID}" does not match any scene in data/performances.js`
          );
        }
      }

      // Track per-scene rows for sequential Line_No check
      if (!rowsByScene.has(sceneId)) {
        rowsByScene.set(sceneId, []);
      }
      const sceneRows = rowsByScene.get(sceneId);
      sceneRows.push(row);

      const expectedLineNo = sceneRows.length;
      if (row.Line_No !== expectedLineNo) {
        addSceneError(
          sceneId,
          `[${perfId} / ${sceneId} / ${lineLabel}] Non-sequential Line_No: expected ${expectedLineNo}, got ${JSON.stringify(row.Line_No)}`
        );
      }

      // Ruby vs Plain exact match & no kanji in <rt>
      if (typeof row.Japanese_Ruby === "string" && typeof row.Japanese_Plain === "string") {
        const stripped = stripRuby(row.Japanese_Ruby);
        if (stripped !== row.Japanese_Plain) {
          addSceneError(
            sceneId,
            `[${perfId} / ${sceneId} / ${lineLabel}] Japanese_Ruby/Japanese_Plain mismatch (${firstDiffSnippet(stripped, row.Japanese_Plain)})`
          );
        }

        const kanjiHits = findKanjiInRt(row.Japanese_Ruby);
        if (kanjiHits.length > 0) {
          addSceneError(
            sceneId,
            `[${perfId} / ${sceneId} / ${lineLabel}] Kanji found inside <rt> tag: ${kanjiHits.map((h) => `<rt>${h}</rt>`).join(", ")}`
          );
        }
      }
    }

    // Check every defined scene has >= 1 row
    for (const scene of definedScenes) {
      const sceneRows = rowsByScene.get(scene.id) || [];
      if (sceneRows.length === 0) {
        addSceneError(
          scene.id,
          `[${perfId} / ${scene.id}] Scene defined in data/performances.js has 0 rows in PERFORMANCE_DATA["${perfId}"]`
        );
      }
      summaryRows.push({
        perfId,
        sceneId: scene.id,
        coverage: scene.textCoverage || "highlights",
        rowCount: sceneRows.length,
        errorCount: sceneErrorCounts.get(scene.id) || 0,
      });
    }

    // Include any orphan Scene_IDs in summary
    for (const [sceneId, sceneRows] of rowsByScene.entries()) {
      if (!definedSceneMap.has(sceneId)) {
        summaryRows.push({
          perfId,
          sceneId,
          coverage: "ORPHAN",
          rowCount: sceneRows.length,
          errorCount: sceneErrorCounts.get(sceneId) || 0,
        });
      }
    }
  }

  // 3. Validate all files in data/kabuki-full/*.js (except merge.js) for Source and Staging
  const kabukiFullDir = path.join(ROOT_DIR, "data", "kabuki-full");
  if (!fs.existsSync(kabukiFullDir)) {
    errors.push("[kabuki-full] Directory data/kabuki-full does not exist.");
  } else {
    const kabukiFullFiles = fs
      .readdirSync(kabukiFullDir)
      .filter((name) => name.endsWith(".js") && name !== "merge.js")
      .sort();

    if (kabukiFullFiles.length === 0) {
      errors.push("[kabuki-full] No scene .js files found in data/kabuki-full/.");
    }

    for (const fileName of kabukiFullFiles) {
      const relPath = path.join("data", "kabuki-full", fileName);
      const isolated = createBrowserContext();
      const ok = loadScript(relPath, isolated.context, errors, relPath);
      if (!ok) continue;

      const fullMap = isolated.windowObj.KABUKI_FULL;
      if (!fullMap || typeof fullMap !== "object") {
        errors.push(`[${relPath}] Did not populate window.KABUKI_FULL.`);
        continue;
      }

      const entries = Object.entries(fullMap);
      if (entries.length === 0) {
        errors.push(`[${relPath}] window.KABUKI_FULL has no entries.`);
        continue;
      }

      for (const [sceneKey, sceneRows] of entries) {
        if (!Array.isArray(sceneRows) || sceneRows.length === 0) {
          errors.push(`[${relPath}] KABUKI_FULL["${sceneKey}"] is empty or not an array.`);
          continue;
        }
        for (let i = 0; i < sceneRows.length; i++) {
          const row = sceneRows[i];
          const lineLabel = row && row.Line_No !== undefined ? `Line ${row.Line_No}` : `index ${i}`;
          if (!row || typeof row !== "object") {
            errors.push(`[${relPath} / ${sceneKey} / ${lineLabel}] Row is not an object.`);
            continue;
          }
          if (typeof row.Source !== "string" || row.Source.trim().length === 0) {
            errors.push(`[${relPath} / ${sceneKey} / ${lineLabel}] Missing or empty "Source" field.`);
          }
          if (!VALID_STAGING.has(row.Staging)) {
            errors.push(
              `[${relPath} / ${sceneKey} / ${lineLabel}] Invalid or missing "Staging" field: ${JSON.stringify(row.Staging)} (expected "performed" or "joruri-only")`
            );
          }
        }
      }
    }
  }

  printReport(summaryRows, errors);
  process.exit(errors.length > 0 ? 1 : 0);
}

function printReport(summaryRows, errors) {
  console.log("=== Performance & Scene Data Validation Summary ===");
  if (summaryRows.length > 0) {
    const wPerf = Math.max(11, ...summaryRows.map((r) => r.perfId.length));
    const wScene = Math.max(8, ...summaryRows.map((r) => r.sceneId.length));
    const wCov = Math.max(8, ...summaryRows.map((r) => r.coverage.length));

    const header = [
      padRight("Performance", wPerf),
      padRight("Scene_ID", wScene),
      padRight("Coverage", wCov),
      padLeft("Rows", 5),
      padLeft("Errors", 6),
      "Status",
    ].join(" | ");
    console.log(header);
    console.log("-".repeat(header.length));

    for (const r of summaryRows) {
      const status = r.errorCount === 0 && r.rowCount > 0 ? "PASS" : "FAIL";
      console.log(
        [
          padRight(r.perfId, wPerf),
          padRight(r.sceneId, wScene),
          padRight(r.coverage, wCov),
          padLeft(r.rowCount, 5),
          padLeft(r.errorCount, 6),
          status,
        ].join(" | ")
      );
    }
    console.log("-".repeat(header.length));
    const totalRows = summaryRows.reduce((acc, r) => acc + r.rowCount, 0);
    console.log(`Total scenes: ${summaryRows.length} | Total rows: ${totalRows} | Total errors: ${errors.length}`);
  } else {
    console.log(`Total errors: ${errors.length}`);
  }

  if (errors.length > 0) {
    console.log("\n=== Validation Errors ===");
    errors.forEach((err, i) => {
      console.log(`${i + 1}. ${err}`);
    });
  } else {
    console.log("\nAll data validation checks passed.");
  }
}

main();
