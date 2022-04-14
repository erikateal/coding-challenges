//OBJECTIVE
// Sum of positive

//LINK
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// INSTRUCTIONS
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY SOLUTION
function positiveSum(arr) {
    let newArray = arr.filter(num => num > 0)
    return newArray.reduce((acc,c) => acc+c, 0)
  }
  
  // BEST PRACTICE
  // function positiveSum(arr) {
  //   var total = 0;    
  //   for (i = 0; i < arr.length; i++) {    
  //     if (arr[i] > 0) {                  
  //       total += arr[i];                  
  //     }
  //   }
  //   return total;             
  // }            
  
  // WHAT I LEARNED
  // .reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.