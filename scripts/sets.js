function saveSets(value) {
  const payload = JSON.stringify(value);
  window.localStorage.setItem("sets", payload);
}

function loadSets() {
  let sets = window.localStorage.getItem("sets");
  return JSON.parse(sets);
}

function getSetIdByURLParam() {
  const params = new URLSearchParams(window.location.search);
  const setId = params.get("id");

  return setId;
}

function updateSet(value) {
  const payload = JSON.stringify(value);
  window.localStorage.setItem("sets", payload);
}

export {
  saveSets,
  loadSets,
  updateSet,
  getSetIdByURLParam
}