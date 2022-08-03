//OBJECTIVE
// Halving Sum

//LINK
// https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

// INSTRUCTIONS
// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...
// All elements of the sum are the results of integer division.

// Example
// 25  =>  25 + 12 + 6 + 3 + 1 = 47

// MY SOLUTION
function halvingSum(n) {
  let sum = 0
  while(n !== 0){
    sum += n
    n = Math.floor(n / 2)
  }
  return sum
}
