//OBJECTIVE
// Are arrow functions odd?

//LINK
// https://www.codewars.com/kata/559f80b87fa8512e3e0000f5

// INSTRUCTIONS
// Time to test your basic knowledge in functions! Return the odds from a list:

// [1, 2, 3, 4, 5]  -->  [1, 3, 5]
// [2, 4, 6]        -->  []

// MY SOLUTION
function odds(values){
    return values.filter(x => x % 2 === 1);
}

// BEST PRACTICE
// function odds(values){
//   return values.filter( v => v%2 );
// }
