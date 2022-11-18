import QuizSet from "./QuizSet.js";
import { sets, saveSets } from "./sets.js";

const foo = new QuizSet("Concepts of Programming - Chapter 1", "The overview of languages");
foo.add("variable", "not consistent or having a fixed pattern; liable to change.");
foo.add("changeable", "irregular; inconstant.");

const boo = new QuizSet("bob smith", "feez nuts");
boo.add("deric", "deric was here");

sets.push(foo);
sets.push(boo);

saveSets();

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

  setContainer.appendChild(titleLabel);
  setContainer.appendChild(descriptionLabel);
  setContainer.appendChild(studyButton);
  setContainer.appendChild(editButton);

  setsContainer.appendChild(setContainer);
}

root.appendChild(setsContainer);


