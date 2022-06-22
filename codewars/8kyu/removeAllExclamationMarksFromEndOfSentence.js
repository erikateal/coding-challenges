//OBJECTIVE
// Exclamation marks series #2: Remove all exclamation marks from the end of sentence

//LINK
// https://www.codewars.com/kata/57faece99610ced690000165

// INSTRUCTIONS
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// MY SOLUTION
function remove (string) { 
    let arr = string.split('')
    for(let i=0; i<arr.length; i++){
      if(arr[arr.length - 1] == '!'){
        arr.pop();
      }
    }
    return arr.join('').toString();
  }

// BEST PRACTICE
// const remove = s => s.replace(/!+$/, '');
