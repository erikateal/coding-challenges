//OBJECTIVE
// Smallest unused ID

//LINK
// https://www.codewars.com/kata/55eea63119278d571d00006a

// INSTRUCTIONS
// You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

// Therefore you need a method, which returns the smallest unused ID for your next new data item...

// Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

// MY SOLUTION
function nextId(ids){
    ids = [...new Set(ids.sort((a,b)=> a-b))]
    for(let i=0; i<ids.length; i++){
      if(ids[0] !== 0){
        return 0
      } else if(ids[i] + 1 !== ids[i+1]){
        return i+1
      }
    }
  }

// BEST PRACTICE
//  function nextId(ids){
//   var x = 0;
//   while (ids.includes(x)) x++;
//   return x;
// }

// function nextId(ids){
//     const used = new Set(ids);
//     for (let i = 0; i <= ids.length; i++) {
//       if (!used.has(i)) return i;
//     }
//   }