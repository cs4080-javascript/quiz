import { getSetByURLParam } from "./sets.js";

const set = getSetByURLParam();

const root = document.getElementById("root");

set.cards.forEach(card => {
  const { term, definition } = card;
  
  const cardFrame = document.createElement("div");
  cardFrame.classList.add("card");

  const container = document.createElement("div");
  container.classList.add("card-inner");

  const frontFrame = document.createElement("div");
  frontFrame.classList.add("card-front");

  const backFrame = document.createElement("div");
  backFrame.classList.add("card-back");

  const termLabel = document.createElement("h1");
  termLabel.classList.add("m-auto");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");
  definitionLabel.classList.add("m-auto");
  definitionLabel.innerText = definition;

  frontFrame.appendChild(termLabel);
  backFrame.appendChild(definitionLabel);

  container.appendChild(frontFrame);
  container.appendChild(backFrame);

  cardFrame.appendChild(container);

  root.appendChild(cardFrame);
});