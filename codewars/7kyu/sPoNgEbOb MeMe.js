//OBJECTIVE
// sPoNgEbOb MeMe

//LINK
// https://www.codewars.com/kata/5982619d2671576e90000017

// INSTRUCTIONS
// You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

// Example:

// input:  "stop Making spongebob Memes!"
// output: "StOp mAkInG SpOnGeBoB MeMeS!"

// MY SOLUTION
function spongeMeme(sentence) {
    sentence = sentence.split('')
    return sentence.map((x,ind) => ind === 0 || ind % 2 === 0 ? x.toUpperCase() : x.toLowerCase()).join('')
  }

// BEST PRACTICE
// function spongeMeme(sentence) {
// return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
// } 
