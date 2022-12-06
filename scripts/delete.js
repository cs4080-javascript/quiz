import QuizSet from "./QuizSet.js";
import { loadSets, getSetIdByURLParam, updateSet } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");


  const card = set.cards;

  const { term, definition } = card;

  //creates delete term and definition textboxes
  const deleteTermLabel = document.createElement("label");
  deleteTermLabel.textContent = "Term";
  const deleteTermTextBox = document.createElement("input");
  deleteTermTextBox.type = "text";
  const deleteTermLineBreak = document.createElement("br");

  const deleteDefinitionLabel = document.createElement("label");
  deleteDefinitionLabel.textContent = "Defintion";
  const deleteDefinitionTextBox = document.createElement("input");
  deleteDefinitionTextBox.type = "text";

  //creates line breaks
  const lineBreak = document.createElement("br");
  const newLineBreak = document.createElement("br");
  
  //creates delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "delete";

  const termLabel = document.createElement("h1");
  termLabel.innerText = term;

  const definitionLabel = document.createElement("p");
  definitionLabel.innerText = definition;

  //deletes term and definition
  deleteButton.onclick = function() {
    let newTerm = deleteTermTextBox.value;
    let newDefinition = deleteDefinitionTextBox.value;
    termLabel.textContent = newTerm;
    definitionLabel.textContent = newDefinition;

    // for loop used to search for the card in the set.cards array. If found, swap the value with the 
    // last card using a temp card
    for(let i = 0; i < set.cards.length; i++) {
     
        if(set.cards[i].term === newTerm) {  

          set.cards.push({
            term: "temp",
            definition: "temp"
          })
    
          set.cards[set.cards.length - 1] = set.cards[i];
          console.log(set.cards[set.cards.length - 2]);
          set.cards[i] = set.cards[set.cards.length - 2];
          set.cards[set.cards.length - 2] = set.cards[set.cards.length - 1];
          set.cards.pop();
          set.cards.pop();
          
          updateSet();
          break;
          
          

            
        }
        else {
          
        }
        
      }
    
  
    updateSet(sets);
  }

  document.body.appendChild(deleteTermLabel);
  document.body.appendChild(deleteTermTextBox);
  document.body.appendChild(deleteTermLineBreak);
  document.body.appendChild(deleteDefinitionLabel);
  document.body.appendChild(deleteDefinitionTextBox);
  document.body.appendChild(deleteButton);
  document.body.appendChild(lineBreak);
  document.body.appendChild(newLineBreak);

