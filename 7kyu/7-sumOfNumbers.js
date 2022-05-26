//OBJECTIVE
// Beginner Series #3 Sum of Numbers

//LINK
// https://www.codewars.com/kata/55f2b110f61eb01779000053

// INSTRUCTIONS
// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples (a, b) --> output (explanation)
// (1, 0) --> 1 (1 + 0 = 1)
// (1, 2) --> 3 (1 + 2 = 3)
// (0, 1) --> 1 (0 + 1 = 1)
// (1, 1) --> 1 (1 since both are same)
// (-1, 0) --> -1 (-1 + 0 = -1)
// (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)

// MY SOLUTION
function getSum( a,b ){
    let arr = [a,b];
    let newArr = [];
    arr.sort((a,b) => a-b)
    
    if(a===b){
      return a
    }
    for (let i=arr[0]; i<=arr[1]; i++){
      newArr.push(i)
    }
    return newArr.reduce((acc,c) => acc+c,0)
  }

// BEST PRACTICE
// const GetSum = (a, b) => {
//   let min = Math.min(a, b),
//   max = Math.max(a, b);
// return (max - min + 1) * (min + max) / 2;
// }