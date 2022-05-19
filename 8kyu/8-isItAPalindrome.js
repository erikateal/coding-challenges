//OBJECTIVE
// Is it a palindrome?

//LINK
// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

// INSTRUCTIONS
// Write a function that checks if a given string (case insensitive) is a palindrome.

// MY SOLUTION
function isPalindrome(x) {
    return x.toLowerCase() === x.split('').reverse().join('').toLowerCase() ? true : false;
   }

// BEST PRACTICE
// const isPalindrome = (x) => {
//     return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
// }
