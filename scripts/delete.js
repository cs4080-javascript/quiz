import QuizSet from "./QuizSet.js";
import { loadSets, getSetIdByURLParam, updateSet } from "./sets.js";

const sets = loadSets();
const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");


  const card = set.cards;

  const { term, definition } = card;

  const deleteButton = document.getElementById("delete-button");
  const deleteTermTextBox = document.getElementById("delete-term-text-box");
  const deleteDefinitionTextBox = document.getElementById("delete-definition-text-box");
  //deletes term and definition
  deleteButton.onclick = function() {
    let newTerm = deleteTermTextBox.value;
    let newDefinition = deleteDefinitionTextBox.value;

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