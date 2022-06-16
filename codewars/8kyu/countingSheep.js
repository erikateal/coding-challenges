//OBJECTIVE
// Counting sheep...

//LINK
// 

// INSTRUCTIONS
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// MY SOLUTION
function countSheeps(arrayOfSheep) {
    let sheep = 0
    for (let i=0; i <= arrayOfSheep.length; i++){
      if(arrayOfSheep[i] == true){
        sheep++
      }
    }
    return sheep
}

// BEST PRACTICE
// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// WHAT I LEARNED
// The filter(Boolean) step does the following:

// Passes each item in the array to the Boolean() object
// The Boolean() object coerces each item to true or false depending on whether it's truthy or falsy
// If the item is truthy, we keep it

// array.filter(item => Boolean(item))
// is exactly the same as this:

// array.filter(Boolean)