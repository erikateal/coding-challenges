//OBJECTIVE
// Greet Me

//LINK
// https://www.codewars.com/kata/535474308bb336c9980006f2

// INSTRUCTIONS
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

// MY SOLUTION
var greet = function(name) {
    name = name[0].toUpperCase() + name.slice(1).toLowerCase();
    return `Hello ${name}!`;
  };

// BEST PRACTICE
// String.prototype.capitalize = function() {
//     return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
// }

// var greet = function(name) {
// return "Hello " + name.capitalize() + "!";
// };
