import { loadSets, getSetIdByURLParam, updateCard, deleteCard } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");

for (let cardId = 0; cardId < set.cards.length; cardId++) {
  const card = set.cards[cardId];

  const { term, definition } = card;

  const wrapper = document.createElement("div");
  wrapper.style.padding = "20px";

  const containerTerm = document.createElement("div");
  const containerDefinition = document.createElement("div");

  const termLabel = document.createElement("label");
  termLabel.innerText = "Term";

  const termInput = document.createElement("input");
  termInput.setAttribute("type", "text");
  termInput.value = term;

  const definitionLabel = document.createElement("label");
  definitionLabel.innerText = "Definition";

  const definitionInput = document.createElement("input");
  definitionInput.setAttribute("type", "text");
  definitionInput.value = definition;

  const updateButton = document.createElement("button");
  updateButton.innerText = "update";
  updateButton.onclick = function() {
    if (termInput.value.length === 0 || definitionInput.value.length === 0) {
      alert("Empty strings can't be submitted");
      return;
    }
    updateCard(setId, cardId, {
      term: termInput.value,
      definition: definitionInput.value
    });
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.onclick = function() {
    deleteCard(setId, cardId);
  }

  containerTerm.appendChild(termLabel);
  containerTerm.appendChild(termInput);

  containerDefinition.appendChild(definitionLabel);
  containerDefinition.appendChild(definitionInput);
  containerDefinition.appendChild(document.createElement("br"));
  containerDefinition.appendChild(updateButton);
  containerDefinition.appendChild(deleteButton);

  wrapper.appendChild(containerTerm);
  wrapper.appendChild(containerDefinition);

  cards.appendChild(wrapper);
}