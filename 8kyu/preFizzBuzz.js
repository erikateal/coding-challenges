//OBJECTIVE
// Pre-FizzBuzz Workout #1

//LINK
// https://www.codewars.com/kata/569e09850a8e371ab200000b

// INSTRUCTIONS
// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

// MY SOLUTION
function preFizz(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        arr.push(i);
    }
    return arr;
}

// BEST PRACTICE
// function preFizz(n) {
//   var output = [];
//   for (var i=1; i<=n; i++)
//   {
//     output.push(i);
//   }
//   return output;
// }
