import { loadSets, getSetIdByURLParam, updateSet, saveSets } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");

for (let id = 0; id < set.cards.length; id++) {
  const card = set.cards[id];

  const { term, definition } = card;

 
  const editButton = document.getElementById("edit-button");
  const oldEditTermTextBox = document.getElementById("old-edit-term-text-box");
  const oldEditDefinitionTextBox = document.getElementById("old-edit-definition-text-box");
  const newEditTermTextBox = document.getElementById("new-edit-term-text-box");
  const newEditDefinitionTextBox = document.getElementById("new-edit-definition-text-box");

  editButton.onclick = function() {
    for(let i = 0; i < set.cards.length; i++) {
      console.log("sadasd");
      let oldTerm = oldEditTermTextBox.value;
      let oldDefinition = oldEditDefinitionTextBox.value;
      let newTerm = newEditTermTextBox.value;
      let newDefinition = newEditDefinitionTextBox.value;

      if(set.cards[i].term === oldTerm) {
        console.log("card to edit found");

        set.cards[i] = ({
          term: newTerm,
          definition: newDefinition
        })

        saveSets(sets);
        break;


      }
      else {

      }

    }

  }
}