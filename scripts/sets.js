import QuizSet from "./QuizSet.js";

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

  window.localStorage.setItem("sets", JSON.stringify(sets));
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
  alert("Successfully deleted card!");
  window.location.reload();
}

function addCard(setId, value) {
  let sets = loadSets();

  sets[setId]["cards"].push(value);

  window.localStorage.setItem("sets", JSON.stringify(sets));
  alert("Successfully added card!");
  window.location.reload();
}

function addSet(value) {
  const { name, description } = value;
  let sets = loadSets();
  
  sets.push(new QuizSet(name, description));

  window.localStorage.setItem("sets", JSON.stringify(sets));
  alert("Successfully added set!");
  window.location.reload();
}

export {
  saveSets,
  loadSets,
  deleteSet,
  deleteCard,
  updateCard,
  addCard,
  addSet,
  getSetIdByURLParam
}