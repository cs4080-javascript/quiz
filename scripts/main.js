import { addSet } from "./addSet.js";
import QuizSet from "./QuizSet.js";
import { saveSets, loadSets, deleteSet } from "./sets.js";

const useSeedData = loadSets() !== null;

const currentSets = [];

const foo = new QuizSet("Concepts of Programming - Chapter 1", "The overview of languages");
foo.add("variable", "not consistent or having a fixed pattern; liable to change.");
foo.add("changeable", "irregular; inconstant.");
  
const boo = new QuizSet("bob smith", "feez nuts");
boo.add("test1", "");
boo.add("test2", "");
boo.add("test3", "");
boo.add("test4", "");
boo.add("test5", "");
boo.add("test6", "");

currentSets.push(foo);
currentSets.push(boo);

const sets = useSeedData ? loadSets() : currentSets;
saveSets(sets);

const root = document.getElementById("root");

const setsContainer = document.createElement("div");
setsContainer.classList.add("set-container");

for (let id = 0; id < sets.length; id++) {
  const set = sets[id];

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

const newSetForm = document.getElementById("form-new-set");

const addSetButton = document.getElementById("addSetButton");
const deleteSetButton = document.getElementById("deleteSetButton");

addSetButton.onclick = function(event) {
  addSet();
}

deleteSetButton.onclick = function(event){
  deleteSet();
}

newSetForm.onsubmit = function(event) {
  event.preventDefault();

  const target = event.target;
  console.dir(target);

  console.log("deeez nuts");
}
