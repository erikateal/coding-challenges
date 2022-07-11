//OBJECTIVE
// Extending JavaScript Objects: Reverse String

//LINK
// https://www.codewars.com/kata/581270cb4927602fc800005a

// INSTRUCTIONS
// Unfortunately, there's no a .reverse() method for the JavaScript String object.

// Your task is to extend JavaScript String object, so you can reverse strings just like this:

// 'Hello, World!'.reverse();
// The method should return:

// '!dlroW ,olleH'

// MY SOLUTION
String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };

// BEST PRACTICE
// String.prototype.reverse = function() {
//   return [...this].reverse().join("")
// };
