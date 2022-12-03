import { loadSets, getSetIdByURLParam, updateSet } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");

for (let id = 0; id < set.cards.length; id++) {

  //creates edit term and definition textboxes
  const editTermLabel = document.createElement("label");
  editTermLabel.textContent = "Term";
  const editTermTextBox = document.createElement("input");
  editTermTextBox.type = "text";
  const editTermLineBreak = document.createElement("br");

  const editDefinitionLabel = document.createElement("label");
  editDefinitionLabel.textContent = "Defintion";
  const editDefinitionTextBox = document.createElement("input");
  editDefinitionTextBox.type = "text";

  //creates line breaks
  const lineBreak = document.createElement("br");
  const newLineBreak = document.createElement("br");
  
  //creates edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";

  //edits term and definition
  editButton.onclick = function() {
    let newTerm = editTermTextBox.value;
    let newDefinition = editDefinitionTextBox.value;
    termLabel.textContent = newTerm;
    definitionLabel.textContent = newDefinition;

    sets[setId].cards[id] = {
      term: newTerm,
      definition: newDefinition
    }

    updateSet(sets);
  }

  document.body.appendChild(editTermLabel);
  document.body.appendChild(editTermTextBox);
  document.body.appendChild(editTermLineBreak);
  document.body.appendChild(editDefinitionLabel);
  document.body.appendChild(editDefinitionTextBox);
  document.body.appendChild(editButton);
  document.body.appendChild(lineBreak);
  document.body.appendChild(newLineBreak);
}