//OBJECTIVE
// Type of sum

//LINK
// https://www.codewars.com/kata/5a2e9ae2b6cfd7692a0000ba

// INSTRUCTIONS
// Return the type of the sum of the two arguments

// MY SOLUTION
function typeOfSum(a, b) {
  if (typeof a === "string" || typeof b === "string") {
    return "string";
  } else if (typeof a === "number" || typeof b === "number") {
    return "number";
  }
  return "number";
}

// BEST PRACTICE
// const typeOfSum = (a, b) => typeof(a + b);
