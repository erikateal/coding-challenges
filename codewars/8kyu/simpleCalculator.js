//OBJECTIVE
// simple calculator

//LINK
// https://www.codewars.com/kata/5810085c533d69f4980001cf

// INSTRUCTIONS
// You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// if the variables are not numbers or the sign does not belong to the list above a message "unknown value" must be returned.

// Example:
// calculator(1,2,"+"); //=> result will be 3
// calculator(1,2,"&"); //=> result will be "unknown value"
// calculator(1,"k","*"); //=> result will be "unknown value"

// MY SOLUTION
function calculator(a, b, sign) {
  if (typeof a != "number" || typeof b != "number") {
    return "unknown value";
  }

  if (sign === "+") {
    return a + b;
  } else if (sign === "-") {
    return a - b;
  } else if (sign === "*") {
    return a * b;
  } else if (sign === "/") {
    return a / b;
  } else {
    return "unknown value";
  }
}

// BEST PRACTICE
// function calculator(a,b,sign){
//   if ((typeof a === "number") && (typeof b === "number")) {
//     switch (sign) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     }
//   }
//   return "unknown value";
// }
