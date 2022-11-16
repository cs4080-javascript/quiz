
const sets = [];

function saveSets() {
  const payload = JSON.stringify(sets);
  window.localStorage.setItem("sets", payload);
}

function loadSets() {
  let sets = window.localStorage.getItem("sets");
  return JSON.parse(sets);
}

function getSetByURLParam() {
  const params = new URLSearchParams(window.location.search);
  const setId = params.get("id");
  
  const sets = loadSets();
  return sets[setId];
}

export {
  sets,
  saveSets,
  loadSets,
  getSetByURLParam
}