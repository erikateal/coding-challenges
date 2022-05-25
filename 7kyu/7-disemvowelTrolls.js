//OBJECTIVE
// Disemvowel Trolls

//LINK
// https://www.codewars.com/kata/52fba66badcd10859f00097

// INSTRUCTIONS
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// MY SOLUTION
function disemvowel(str) {
    let string = str.split('');
    for (let i=0; i<=string.length; i++){
      if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u' || string[i] === 'A' || string[i] === 'E' || string[i] === 'I' || string[i] === 'O' || string[i] === 'U'){
        string[i] = ''
      }
    }
    return string.join('')
  }

// BEST PRACTICE
// (w/out regex)
// function disemvowel(str) {
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
  
//   return str.split('').filter(function(el) {
//     return vowels.indexOf(el.toLowerCase()) == -1;
//   }).join('');
// }
