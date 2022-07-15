//OBJECTIVE
// Triple Trouble

//LINK
// https://www.codewars.com/kata/5704aea738428f4d30000914

// INSTRUCTIONS
// Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

// E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

// Note: You can expect all of the inputs to be the same length.

// MY SOLUTION
function tripleTrouble(one, two, three){
    let repeatStr = ''
    for(let i=0; i < one.length; i++){
      repeatStr += (one[i]+two[i]+three[i])
    }
    return repeatStr
   }

// BEST PRACTICE
// function tripleTrouble(one, two, three) {
//   var result = "";
//   for (let i = 0; i < one.length; i++) {
//     result += one.charAt(i) + two.charAt(i) + three.charAt(i);
//   }
//   return result;
// }

// WHAT I LEARNED
// 
