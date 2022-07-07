//OBJECTIVE
// Find the capitals

//LINK
// https://www.codewars.com/kata/539ee3b6757843632d00026b

// INSTRUCTIONS
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

// MY SOLUTION
var capitals = function (word) {
    let letter = word.split('')
    let arr = []
    for(let i=0; i<letter.length; i++){
      if(letter[i] === letter[i].toUpperCase()){
        arr.push(letter.indexOf(letter[i]))
      }
    }
    return arr
  }

// BEST PRACTICE
// var capitals = function (word) {
//   var caps = [];
//   for(var i = 0; i < word.length; i++) {
//     if(word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };
