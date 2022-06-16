//OBJECTIVE
// Remove exclamation marks

//LINK
// https://www.codewars.com/kata/57a0885cbb9944e24c00008e

// INSTRUCTIONS
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// MY SOLUTION
function removeExclamationMarks(s) {
      let arr = s.split('')
      for(let i=0; i < arr.length; i++){
        if(arr[i] === '!'){
          arr.splice(i,1);
          i--
        }
      }
      return arr.join('')
    }

// BEST PRACTICE
// without regex
// function removeExclamationMarks(s) {
//   return s.split('!').join('');
// }
