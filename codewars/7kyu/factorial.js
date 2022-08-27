//OBJECTIVE
// Factorial

//LINK
// https://www.codewars.com/kata/57a049e253ba33ac5e000212

// INSTRUCTIONS
// Your task is to write function factorial.

// MY SOLUTION
function factorial(n) {
  if (n < 0) {
    return -1;
  } else if (n == 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

// BEST PRACTICE
// const factorial = n => n ? factorial(n - 1) * n : 1;

// USING A WHILE LOOP
// function factorial(n){
//   let answer = 1;

//   while (n > 0) {
//     answer *= n;
//     n--;
//   }

//   return answer;
// }
