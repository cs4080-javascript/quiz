import QuizSet from "./QuizSet.js";
import { saveSets, loadSets } from "./sets.js";

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

for (const set of sets) {
  const setContainer = document.createElement("div");
  setContainer.classList.add("set");
  setContainer.setAttribute("id", set.name);

  const titleLabel = document.createElement("h1");
  titleLabel.innerText = set.name;

  const descriptionLabel = document.createElement("p");
  descriptionLabel.innerText = set.description;

  const studyButton = document.createElement("button");
  studyButton.innerText = "Study";
  studyButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/study.html?id=${id}`;
  }

  const editButton = document.createElement("button");
  editButton.innerText = "Edit";
  editButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/edit.html?id=${id}`;
  }

  const addCardButton = document.createElement("button");
  addCardButton.innerText = "add";
  addCardButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/add.html?id=${id}`;
    
  }

  const deleteCardButton = document.createElement("button");
  deleteCardButton.innerText = "delete";
  deleteCardButton.onclick = function() {
    const id = sets.indexOf(set);
    window.location.href = `${window.location.origin}/delete.html?id=${id}`;

  }

 

  setContainer.appendChild(titleLabel);
  setContainer.appendChild(descriptionLabel);
  setContainer.appendChild(studyButton);
  setContainer.appendChild(editButton);
  setContainer.appendChild(addCardButton);
  setContainer.appendChild(deleteCardButton);


  setsContainer.appendChild(setContainer);
}

root.appendChild(setsContainer);

const newSetForm = document.getElementById("form-new-set");
const addCardFrame = document.getElementById("form-new-card");
const addCardButton = document.getElementById("form-new-card-button");
const addSetButton = document.getElementById("addSetButton");


addCardButton.onclick = function(event) {
  event.preventDefault();

  const inputFrame = document.createElement("div");

  const termFrame = document.createElement("div");

  const termLabel = document.createElement("label")
  termLabel.innerText = "Term";

  const termInput = document.createElement("input");
  termInput.setAttribute("type", "text");

  termFrame.appendChild(termLabel);
  termFrame.appendChild(termInput);

  const definitionFrame = document.createElement("div");

  const definitionLabel = document.createElement("label");
  definitionLabel.innerText = "Definition";

  const definitionInput = document.createElement("input");
  definitionInput.setAttribute("type", "text");

  definitionFrame.appendChild(definitionLabel);
  definitionFrame.appendChild(definitionInput);

  inputFrame.appendChild(termFrame);
  inputFrame.appendChild(definitionFrame);

  addCardFrame.appendChild(inputFrame);
}

addSetButton.onclick = function(event) {
  let newSetTitle = document.getElementById("new-set-title").value;
  let newSetDescription = document.getElementById("new-set-description").value;
  console.log("add set button clicked");
  const newSet = new QuizSet(newSetTitle, newSetDescription);
  newSet.add("test", "card"); // adding test card
  sets.push(newSet);
  saveSets(sets);
  window.location.reload();

}

newSetForm.onsubmit = function(event) {
  event.preventDefault();

  const target = event.target;
  console.dir(target);

  console.log("deeez nuts");
}


