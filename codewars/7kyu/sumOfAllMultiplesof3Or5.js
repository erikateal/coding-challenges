//OBJECTIVE
// Sum of all the multiples of 3 or 5

//LINK
// https://www.codewars.com/kata/57f36495c0bb25ecf50000e7

// INSTRUCTIONS
// Your task is to write function findSum.

// Up to and including n, this function will return the sum of all multiples of 3 and 5.

// For example:

// findSum(5) should return 8 (3 + 5)

// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10) 

// MY SOLUTION
function findSum(n) {
    let sum = [];
    for(let i=1; i<=n; i++){
      if(i%3 === 0 || i%5 === 0){
        sum.push(i)
      }
    }
    return sum.reduce((acc, c) => acc+c, 0)
  }

// BEST PRACTICE
// function findSum(n) {
//   let result = 0;
//   for (let i = 0; i <= n; i += 1) {
//     if (i % 3 ===0 || i % 5 === 0) result += i
//   }
//   return result
// }

