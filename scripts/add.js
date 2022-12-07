import QuizSet from "./QuizSet.js";

import { loadSets, getSetIdByURLParam, updateSet } from "./sets.js";




const sets = loadSets();


const setId = getSetIdByURLParam();

const set = sets[setId];

const cards = document.getElementById("cards");

  const card = set.cards;

  const { term, definition } = card;


  const addButton = document.getElementById("testings");
  const addTermTextBox = document.getElementById("term-text-box");
  const addDefinitionTextBox = document.getElementById("definition-text-box");
  //adds term and definition
  addButton.onclick = function() {
    let newTerm = addTermTextBox.value;
    let newDefinition = addDefinitionTextBox.value;

    set.cards.push({
      term: newTerm,
      definition: newDefinition
    })

    updateSet(sets);
  }
