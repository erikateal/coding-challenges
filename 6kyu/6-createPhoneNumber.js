//OBJECTIVE
// Create Phone Number

//LINK
// https://www.codewars.com/kata/525f50e3b73515a6db000b83

// INSTRUCTIONS
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

// MY SOLUTION
function createPhoneNumber(numbers){
    let areaCode = numbers.slice(0,3).toString().split(',').join('')
    let firstThree = numbers.slice(3,6).toString().split(',').join('')
    let lastFour = numbers.slice(6,10).toString().split(',').join('')
    return `(${areaCode}) ${firstThree}-${lastFour}`
  }

// BEST PRACTICE
// function createPhoneNumber(numbers){
//   var format = "(xxx) xxx-xxxx";
//   for(var i = 0; i < numbers.length; i++)
//   {
//     format = format.replace('x', numbers[i]);
//   }
//   return format;
// }

// WHAT I LEARNED
// 