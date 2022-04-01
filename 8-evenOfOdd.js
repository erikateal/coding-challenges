//OBJECTIVE
// Even of Odd

//LINK
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

// INSTRUCTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// MY SOLUTION
function even_or_odd(number) {
    if (number % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }
  
  // BEST PRACTICE
  // function even_or_odd(number) {
  //   return number % 2 ? "Odd" : "Even"
  // }
  
  // WHAT I LEARNED
  // The boolean value of 0 is false or falsy, so setting 'number % 2 === 0' is not necessary. 
  