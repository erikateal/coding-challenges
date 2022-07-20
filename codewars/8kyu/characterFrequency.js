//OBJECTIVE
// Character Frequency

//LINK
// https://www.codewars.com/kata/548ef5b7f33a646ea50000b2

// INSTRUCTIONS
// In this kata, you will get a message and you will need to get the frequency of each and every character!

// Explanation
// Your function will be called char_freq/charFreq/CharFreq and you will get passed a string, you will then return a dictionary (object in JavaScript) with as keys the characters, and as values how many times that character is in the string. You can assume you will be given valid input.

// Example
// charFreq("I like cats") // Returns {'a': 1, ' ': 2, 'c': 1, 'e': 1, 'I': 1, 'k': 1, 'l': 1, 'i': 1, 's': 1, 't': 1}

// MY SOLUTION
function charFreq(message) {
    let frequency = {}
    for (let i=0; i<message.length; i++) {
      if(frequency.hasOwnProperty(message[i])) {
        frequency[message[i]] += 1
      } else {
        frequency[message[i]] = 1
      }
      }
    return frequency;
  }
  

// BEST PRACTICE
// function charFreq(message) {
//   return message.split('').reduce(function(acc, cur) {
//     return (acc[cur] = (acc[cur] || 0) + 1) && acc;
//   }, {});
// }

// WHAT I LEARNED
// hasOwnProperty() method
