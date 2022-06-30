//OBJECTIVE
// Multiply the number

//LINK
// https://www.codewars.com/kata/5708f682c69b48047b000e07

// INSTRUCTIONS
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

// multiply(3)==15 // 3 * 5¹
// multiply(10)==250 // 10 * 5²
// multiply(200)==25000 // 200 * 5³
// multiply(0)==0 // 0 * 5¹
// multiply(-3)==-15 // -3 * 5¹

// MY SOLUTION
function multiply(number){
    return number < 0 ? number * Math.pow(5,number.toString().length-1) : number * Math.pow(5,number.toString().length)
  }

// BEST PRACTICE
// function multiply(number) {
//   return number * Math.pow(5, Math.abs(number).toString().length);
// }
