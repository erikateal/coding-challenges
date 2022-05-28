//OBJECTIVE
// Name Shuffler

//LINK
// https://www.codewars.com/kata/559ac78160f0be07c200005a

// INSTRUCTIONS
// Write a function that returns a string in which firstname is swapped with last name.

// nameShuffler('john McClane'); => "McClane john"

// MY SOLUTION
function nameShuffler(str){
    return str.split(' ').reverse().join(' ');
}
  
// BEST PRACTICE
// function nameSuffle(str){
//     return str.split(' ').reverse().join(' ')
//   }
  
// WHAT I LEARNED
