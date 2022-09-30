//OBJECTIVE
// Find The Parity Outlier

//LINK
// https://www.codewars.com/kata/5526fc09a1bbd946250002dc

// INSTRUCTIONS
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

// MY SOLUTION
function findOutlier(integers) {
  let even = [];
  let odd = [];

  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0 || integers[i] === 0) {
      even.push(integers[i]);
    } else {
      odd.push(integers[i]);
    }
  }

  if (even.length === 1) {
    return +even;
  }
  return +odd;
}

// BEST PRACTICE
// function findOutlier(integers){
//   var even = integers.filter(a=>a%2==0);
//   var odd = integers.filter(a=>a%2!==0);
//   return even.length==1? even[0] : odd[0];
// }
