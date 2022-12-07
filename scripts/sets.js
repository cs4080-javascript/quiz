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

function deleteSet(id) {
  let sets = loadSets();
  sets.splice(id, 1);

  window.localStorage.setItem("sets", JSON.stringify(set));
  window.location.reload();
}

function updateCard(setId, cardId, value) {
  let sets = loadSets();

  sets[setId]["cards"][cardId] = value;

  window.localStorage.setItem("sets", JSON.stringify(sets));
  alert("Successfully updated!");
  window.location.reload();
}

function deleteCard(setId, cardId) {
  let sets = loadSets();

  sets[setId]["cards"].splice(cardId, 1);

  window.localStorage.setItem("sets", JSON.stringify(sets));
  alert("Successfully deleted!");
  window.location.reload();
}

export {
  saveSets,
  loadSets,
  deleteSet,
  deleteCard,
  updateCard,
  getSetIdByURLParam
}