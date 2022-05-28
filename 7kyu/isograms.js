//OBJECTIVE
// Isograms

//LINK
// https://www.codewars.com/kata/54ba84be607a92aa900000f1

// INSTRUCTIONS
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// MY SOLUTION
function isIsogram(str){
    str = str.toLowerCase()
    for(let i = 0; i <= str.length; i++) {
      for(let j = i+1; j <= str.length; j++) {
        if(str[j] === str[i]) {
          return false;
        }
      }
    }
    return true;
  }

// BEST PRACTICE
// function isIsogram(str){
//   return new Set(str.toUpperCase()).size == str.length;
// }

// WHAT I LEARNED
// The Set object allows you to store unique values of any time. new Set() creates a new Set object where each value in the Set has to be unique.
// Set.protoype.size returns the number of values in the Set object 