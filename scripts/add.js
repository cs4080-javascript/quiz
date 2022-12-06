import QuizSet from "./QuizSet.js";

import { loadSets, getSetIdByURLParam, updateSet } from "./sets.js";


const sets = loadSets();


const setId = getSetIdByURLParam();

const set = sets[setId];




const cards = document.getElementById("cards");

  const card = set.cards;

  const { term, definition } = card;

  //creates add term and definition textboxes
  const addTermLabel = document.createElement("label");
  addTermLabel.textContent = "Term";
  const addTermTextBox = document.createElement("input");
  addTermTextBox.type = "text";
  const addTermLineBreak = document.createElement("br");

  const addDefinitionLabel = document.createElement("label");
  addDefinitionLabel.textContent = "Defintion";
  const addDefinitionTextBox = document.createElement("input");
  addDefinitionTextBox.type = "text";

  //creates line breaks
  const lineBreak = document.createElement("br");
  const newLineBreak = document.createElement("br");
  
  //creates add button
  const addButton = document.createElement("button");
  addButton.textContent = "add";

  const termLabel = document.createElement("h1");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");
  definitionLabel.innerText = definition;

  //adds term and definition
  addButton.onclick = function() {
    let newTerm = addTermTextBox.value;
    let newDefinition = addDefinitionTextBox.value;
    termLabel.textContent = newTerm;
    definitionLabel.textContent = newDefinition;

    console.log(set.cards.length);
    set.cards.push({
      term: newTerm,
      definition: newDefinition
    })
    
   
    
  
    updateSet(sets);
  }

  document.body.appendChild(addTermLabel);
  document.body.appendChild(addTermTextBox);
  document.body.appendChild(addTermLineBreak);
  document.body.appendChild(addDefinitionLabel);
  document.body.appendChild(addDefinitionTextBox);
  document.body.appendChild(addButton);
  document.body.appendChild(lineBreak);
  document.body.appendChild(newLineBreak);

