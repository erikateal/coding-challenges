//OBJECTIVE
// Maximum Product

//LINK
// https://www.codewars.com/kata/5a4138acf28b82aa43000117

// INSTRUCTIONS
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// MY SOLUTION
function adjacentElementsProduct(array) {
  let product = array[0] * array[1];
  for (let i = 0; i < array.length; i++) {
    if (array[i] * array[i + 1] > product) {
      product = array[i] * array[i + 1];
    }
  }
  return product;
}

// BEST PRACTICE
// function adjacentElementsProduct(array) {
//   let newArr = []
//   for(i=0; i < array.length-1; i++){
//     newArr.push(array[i]*array[i+1])
//   }
//   return Math.max(...newArr)
// }
