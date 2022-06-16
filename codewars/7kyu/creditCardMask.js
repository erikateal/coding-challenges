//OBJECTIVE
// Credit Card Mask

//LINK
// https://www.codewars.com/kata/5412509bd436bd33920011bc

// INSTRUCTIONS
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"

// MY SOLUTION
function maskify(cc) {
    return cc.slice(-4).padStart(cc.length,'#')
  }

// BEST PRACTICE
// without regex 
// function maskify(cc) {
//   cc = cc.split("");
//   for(var i = 0; i < cc.length - 4; i++){
//     cc[i] = "#";
// }

// cc = cc.join("");
// return cc
// }

// WHAT I LEARNED
// The padStart() method pads the current string from the start with another string until the resulting string reaches the given length
// Takes 2 parametrs : targetLength & padString
// targetLength = length of the resulting string once the current string has been padded. If the value is < str.length, the current string is returned as is