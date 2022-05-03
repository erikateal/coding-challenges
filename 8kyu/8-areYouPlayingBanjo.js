//OBJECTIVE
// Are You Playing Banjo?

//LINK
// https://www.codewars.com/kata/53af2b8861023f1d88000832

// INSTRUCTIONS
// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

// MY SOLUTION
function areYouPlayingBanjo(name) {
    if (name.startsWith('R') || name.startsWith('r')) return `${name} plays banjo`
    return `${name} does not play banjo`;
  }

// BEST PRACTICE
// function areYouPlayingBanjo(name) {
//   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
// }
