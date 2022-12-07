import { loadSets, getSetIdByURLParam } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const root = document.getElementById("root");

const cards = document.getElementById("cards");
let correctCount = 0;
let buttonsClicked = 0;
let totalCount = set.cards.length;
console.log(totalCount);


for (const card of set.cards) {
  const { term, definition } = card;
  
  const cardFrame = document.createElement("button");
  cardFrame.classList.add("card");

  const test = document.createElement("button");
  test.classList.add("card");
 

  const container = document.createElement("div");
  container.classList.add("card-inner");

  const frontFrame = document.createElement("div");
  frontFrame.classList.add("card-front");

  const backFrame = document.createElement("div");
  backFrame.classList.add("card-back");

  const termLabel = document.createElement("h2");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");

  const correctButton = document.createElement("button");
  correctButton.innerText = "Correct";
  correctButton.className = "correct-buttons correct-buttons1";
  correctButton.onclick = function() {

    correctCount++;
    buttonsClicked++;
    correctButton.disabled = true;
    wrongButton.disabled = true;

    if(buttonsClicked === totalCount) {
      console.log(correctCount / totalCount);
      window.alert(" Set complete. Your score was: "
       + correctCount + "/" + totalCount + " or " + (correctCount/totalCount) * 100 + "%");
    }
    
    
  }
  const wrongButton = document.createElement("button");
  wrongButton.className = "wrong-buttons wrong-buttons1";
  wrongButton.innerText = "Wrong";
  wrongButton.onclick = function() {

    buttonsClicked++;
    wrongButton.disabled = true;
    correctButton.disabled = true;
    
    if(buttonsClicked === totalCount) {
      window.alert(" Set complete. Your score was: "
       + correctCount + "/" + totalCount + " or " + (correctCount/totalCount) * 100 + "%");
    }
    
  }

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
  cardFrame.appendChild(correctButton);
  cardFrame.appendChild(wrongButton);

  cards.appendChild(cardFrame);
  let correctPercentage = correctCount / totalCount;
  

 
}