//OBJECTIVE
// Vowel remover

//LINK
// https://www.codewars.com/kata/5547929140907378f9000039

// INSTRUCTIONS
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

// MY SOLUTION
function shortcut (string) {
    let str = string.split('')
    for (let i=0; i<=str.length; i++){
      if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u'){
        str[i] = ''
      }
    }
    return str.join('')
  }

// BEST PRACTICE
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }

// WHAT I LEARNED
// more Regex practice