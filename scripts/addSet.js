import { loadSets, saveSets } from "./sets.js";
import QuizSet from "./QuizSet.js";

const sets = loadSets();

function addSet() {
    let newSetTitle = document.getElementById("new-set-title").value;
    let newSetDescription = document.getElementById("new-set-description").value;
    console.log("add set button clicked");
    const newSet = new QuizSet(newSetTitle, newSetDescription);
    newSet.add("test", "card"); // adding test card
    sets.push(newSet);
    saveSets(sets);
    window.location.reload();

}

export {
    addSet
}