//OBJECTIVE
// Length and two values.

//LINK
// https://www.codewars.com/kata/62a611067274990047f431a8

// INSTRUCTIONS
// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []

// MY SOLUTION
function alternate(n, firstValue, secondValue){
    let arr = [];
    for(let i=1; i <= n; i++){
      if(i % 2 !== 0){
        arr.push(firstValue);
      } else if(i % 2 === 0){
        arr.push(secondValue);
      }
    }
    return arr
  }

// BEST PRACTICE
// function alternate(n, firstValue, secondValue){
//   const array = [];
//   for (let i = 0; i < n; i++) {
//     array.push(i % 2 === 0 ? firstValue : secondValue)
//   }
//   return array;
// }
