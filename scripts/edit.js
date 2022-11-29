import { getSetByURLParam } from "./sets.js";

const set = getSetByURLParam();

console.log(set);

const cards = document.getElementById("cards");

for (const card of set.cards) {
  const { term, definition } = card;

  //creates edit term and definition textboxes
  const editTermTextBox = document.createElement("input");
  editTermTextBox.type = "text";

  const editDefinitionTextBox = document.createElement("input");
  editDefinitionTextBox.type = "text";
  
  //creates edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  
  const cardFrame = document.createElement("button");
  cardFrame.classList.add("card");

  const container = document.createElement("div");
  container.classList.add("card-inner");

  const frontFrame = document.createElement("div");
  frontFrame.classList.add("card-front");

  const backFrame = document.createElement("div");
  backFrame.classList.add("card-back");

  const termLabel = document.createElement("h1");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");
  definitionLabel.innerText = definition;

  cardFrame.onclick = function() {
    if (container.classList.contains("card-flipped")) {
      container.classList.remove("card-flipped");
    } else {
      container.classList.add("card-flipped");
    }
  }

  //edits term and definition
  editButton.onclick = function() {
    let newTerm = editTermTextBox.value;
    let newDefinition = editDefinitionTextBox.value;
    termLabel.textContent = newTerm;
    definitionLabel.textContent = newDefinition;
  }

  frontFrame.appendChild(termLabel);
  backFrame.appendChild(definitionLabel);

  container.appendChild(frontFrame);
  container.appendChild(backFrame);

  cardFrame.appendChild(container);

  cards.appendChild(cardFrame);
  cards.appendChild(editTermTextBox);
  cards.appendChild(editDefinitionTextBox);
  cards.appendChild(editButton);
}