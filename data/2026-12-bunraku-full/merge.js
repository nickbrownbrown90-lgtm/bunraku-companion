// Merges full-text scene files (window.DEC2026_BUNRAKU_FULL) into the December 2026 Bunraku dataset.
// Any scene present in DEC2026_BUNRAKU_FULL replaces its highlights rows and is flagged as full text.
(function () {
  var PERF_ID = "2026-12-bunraku";
  var full = window.DEC2026_BUNRAKU_FULL || {};
  var data = (window.PERFORMANCE_DATA || {})[PERF_ID];
  if (!data) return;

  var merged = [];
  var done = {};
  data.forEach(function (row) {
    var id = row.Scene_ID;
    if (full[id] && full[id].length) {
      if (!done[id]) {
        merged = merged.concat(full[id]);
        done[id] = true;
      }
    } else {
      merged.push(row);
    }
  });
  window.PERFORMANCE_DATA[PERF_ID] = merged;

  var perf = (window.PERFORMANCES || []).find(function (p) { return p.id === PERF_ID; });
  if (perf && perf.parts) {
    perf.parts.forEach(function (part) {
      (part.scenes || []).forEach(function (scene) {
        if (done[scene.id]) scene.textCoverage = "full";
      });
    });
  }
})();
