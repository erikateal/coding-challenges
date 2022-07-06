//OBJECTIVE
// Sum of Odd Cubed Numbers

//LINK
// https://www.codewars.com/kata/580dda86c40fa6c45f00028a

// INSTRUCTIONS
// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

// MY SOLUTION
function cubeOdd(arr) {
    let cubedOdd = arr.filter(x => x % 2 !== 0).map(x => Math.pow(x,3))
    if(cubedOdd.includes(NaN)){
      return undefined
    }
      return cubedOdd.reduce((acc,c) => acc + c, 0)
  }

// BEST PRACTICE
// let cubeOdd = a => {
//   var isNumeric = a.every(x=>!isNaN(x))
//   return isNumeric ? a.filter(n=>n%2).reduce((s,n)=>s+(n*n*n),0) : undefined
// }
 