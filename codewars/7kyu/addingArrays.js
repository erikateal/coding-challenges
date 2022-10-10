//OBJECTIVE
// Adding Arrays

//LINK
// https://www.codewars.com/kata/59778cb1b061e877c50000cc

// INSTRUCTIONS
// Create a function that takes an array of letters, and combines them into words in a sentence.

// The array will be formatted as so:

// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]
// The function should combine all the 0th indexed letters to create the word 'just', all the 1st indexed letters to create the word 'live', etc.

// Shorter words will have an empty string in the place once the word has already been mapped out (see the last element in the last element in the array).

// Examples:

// arrAdder([
// ['J','L','L','M'],
// ['u','i','i','a'],
// ['s','v','f','n'],
// ['t','e','e','']
// ]) // => "Just Live Life Man"

// arrAdder([
//   [ 'T', 'M', 'i', 't', 'p', 'o', 't', 'c' ],
//   [ 'h', 'i', 's', 'h', 'o', 'f', 'h', 'e' ],
//   [ 'e', 't', '', 'e', 'w', '', 'e', 'l' ],
//   [ '', 'o', '', '', 'e', '', '', 'l' ],
//   [ '', 'c', '', '', 'r', '', '', '' ],
//   [ '', 'h', '', '', 'h', '', '', '' ],
//   [ '', 'o', '', '', 'o', '', '', '' ],
//   [ '', 'n', '', '', 'u', '', '', '' ],
//   [ '', 'd', '', '', 's', '', '', '' ],
//   [ '', 'r', '', '', 'e', '', '', '' ],
//   [ '', 'i', '', '', '', '', '', '' ],
//   [ '', 'a', '', '', '', '', '', '' ] ]) // => "The Mitochondria is the powerhouse of the cell"

// MY SOLUTION
function arrAdder(arr) {
  var str = "";
  for (var i = 0; i < arr[0].length; i++) {
    for (var j = 0; j < arr.length; j++) {
      res += arr[j][i];
    }
    str += " ";
  }
  return str.trim();
}

// BEST PRACTICE
// function arrAdder(arr) {
//   var sentence = "";
//   for(var i = 0; i < arr[0].length; i++){
//     for(var j = 0; j < arr.length; j++){
//       sentence+=arr[j][i];
//     }
//     sentence+=" ";
//   }
//   return sentence.trim();
// }
