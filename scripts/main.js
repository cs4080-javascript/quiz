import QuizSet from "./QuizSet.js";
import { saveSets, loadSets, deleteSet, addSet } from "./sets.js";

const useSeedData = loadSets() !== null;

const currentSets = [];

// Seeds dummy data, if no existing localstorage data
const foo = new QuizSet("Concepts of Programming - Chapter 1", "The overview of languages");
foo.add("variable", "not consistent or having a fixed pattern; liable to change.");
foo.add("changeable", "irregular; inconstant.");
  
const boo = new QuizSet("bob smith", "feez nuts");
boo.add("test1", "1");
boo.add("test2", "2");
boo.add("test3", "3");
boo.add("test4", "4");
boo.add("test5", "5");
boo.add("test6", "6");

currentSets.push(foo);
currentSets.push(boo);

const sets = useSeedData ? loadSets() : currentSets;
saveSets(sets);

const root = document.getElementById("root");

const setsContainer = document.createElement("div");
setsContainer.classList.add("set-container");

for (let id = 0; id < sets.length; id++) {
  const set = sets[id];
  console.log(set);

  const setContainer = document.createElement("div");
  setContainer.classList.add("set");
  setContainer.setAttribute("id", set.name);

  const titleLabel = document.createElement("h1");
  titleLabel.innerText = set.name;

  const descriptionLabel = document.createElement("p");
  descriptionLabel.innerText = set.description;

  const studyButton = document.createElement("button");
  studyButton.innerText = "Study set";
  studyButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/study.html?id=${id}`;
  }

  const editButton = document.createElement("button");
  editButton.innerText = "Edit card";
  editButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/edit.html?id=${id}`;
  }

  const addCardButton = document.createElement("button");
  addCardButton.innerText = "Add card";
  addCardButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/add.html?id=${id}`;
  }

  const deleteSetButton = document.createElement("button");
  deleteSetButton.innerText = "Delete Set";
  deleteSetButton.onclick = function() {
    deleteSet(id);
  }

  setContainer.appendChild(titleLabel);
  setContainer.appendChild(descriptionLabel);
  setContainer.appendChild(studyButton);
  setContainer.appendChild(editButton);
  setContainer.appendChild(addCardButton);
  setContainer.appendChild(deleteSetButton);

  setsContainer.appendChild(setContainer);
}

root.appendChild(setsContainer);

const addSetButton = document.getElementById("addSetButton");

const newSetNameInput = document.getElementById("new-set-title");
const newSetDescriptionInput = document.getElementById("new-set-description");

addSetButton.onclick = function() {
  console.log(newSetNameInput);
  if (newSetNameInput.value.length === 0 || newSetDescriptionInput.value.length === 0) {
    alert("Inputs must not be empty.");
    return;
  }

  addSet({
    name: newSetNameInput.value,
    description: newSetDescriptionInput.value
  });
}