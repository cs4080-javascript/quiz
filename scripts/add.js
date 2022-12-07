import { getSetIdByURLParam, addCard } from "./sets.js";

const setId = getSetIdByURLParam();

const addButton = document.getElementById("testings");
const addTermTextBox = document.getElementById("term-text-box");
const addDefinitionTextBox = document.getElementById("definition-text-box");

//adds term and definition
addButton.onclick = function() {
  let newTerm = addTermTextBox.value;
  let newDefinition = addDefinitionTextBox.value;

  if (newTerm.length === 0 || newDefinition.length === 0) {
    alert("Inputs must not be empty.");
    return;
  }

  addCard(setId, {
    term: newTerm,
    definition: newDefinition
  });
}
