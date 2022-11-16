import { getSetByURLParam } from "./sets.js";

const set = getSetByURLParam();

const root = document.getElementById("root");

set.cards.forEach(card => {
  const { term, definition } = card;
  
  const cardContainer = document.createElement("div");

  const termLabel = document.createElement("h1");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");
  definitionLabel.innerText = definition;

  cardContainer.appendChild(termLabel);
  cardContainer.appendChild(definitionLabel);

  root.appendChild(cardContainer);
});