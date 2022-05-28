//OBJECTIVE
// How good are you really?

//LINK
// https://www.codewars.com/kata/5601409514fc93442500010b

// INSTRUCTIONS
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

// MY SOLUTION
function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((acc, c) => acc+c)/classPoints.length;
    if (avg < yourPoints) {
    return true;
  } 
    return false;
  }  

// BEST PRACTICE
// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
// }

// WHAT I LEARNED
// my if/else statement can be refactored 