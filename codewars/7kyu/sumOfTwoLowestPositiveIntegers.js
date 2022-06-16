//OBJECTIVE
// Sum of two lowest positive integers

//LINK
// https://www.codewars.com/kata/558fc85d8fd1938afb000014

// INSTRUCTIONS
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

// MY SOLUTION
function sumTwoSmallestNumbers(numbers) {  
    return numbers.sort((a,b) => a-b).slice(0,2).reduce((acc,c) => acc+c,0)
}

// BEST PRACTICE
// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };
