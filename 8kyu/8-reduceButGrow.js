//OBJECTIVE
// Beginner - Reduce but Grow

//LINK
// https://www.codewars.com/kata/57f780909f7e8e3183000078

// INSTRUCTIONS
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// MY SOLUTION
function grow(x){
    return x.reduce((acc, c) => acc * c, 1);
  }

// BEST PRACTICE
// const grow=x=> x.reduce((a,b) => a*b);