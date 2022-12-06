import { loadSets, saveSets } from "./sets.js";

const sets = loadSets();

function deleteSet() {console.log("delete set button clicked");
  let SetTitleToDelete = document.getElementById("delete-set-title").value;
  let setDescriptionToDelete = document.getElementById("delete-set-description").value;

  for(let i = 0; i < sets.length; i++) {
    console.log(sets[i]);
     
    if(sets[i].name === SetTitleToDelete) {  
      console.log("set to be deleted was found");

      sets.push({
        name: "temp",
        description: "temp"
      })
      let set = sets[i];

      sets[sets.length - 1] = sets[i];
      sets[i] = sets[sets.length - 2];
      sets[set.length - 2] = sets[sets.length - 1];
      //sets.pop();
      sets.pop();
      
      sets.pop();
      break;
      
      

        
    }
    else {
      
    }
    
  }
  

  saveSets(sets);
  window.location.reload();
}
export {
    deleteSet
}