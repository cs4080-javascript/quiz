import { loadSets, getSetIdByURLParam } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const root = document.getElementById("root");

const cards = document.getElementById("cards");

for (const card of set.cards) {
  const { term, definition } = card;
  
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

  frontFrame.appendChild(termLabel);
  backFrame.appendChild(definitionLabel);

  container.appendChild(frontFrame);
  container.appendChild(backFrame);

  cardFrame.appendChild(container);

  cards.appendChild(cardFrame);
}