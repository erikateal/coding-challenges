//OBJECTIVE
// SpeedCode #2 - Array Madness

//LINK
// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1

// INSTRUCTIONS
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b.

// E.g.
// arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3

// MY SOLUTION
function arrayMadness(a, b) {
    let squareA = a.map(x => Math.pow(x,2)).reduce((acc,c) => acc+c, 0)
    let cubeB = b.map(x => Math.pow(x,3)).reduce((acc,c) => acc+c, 0)
    
    return squareA > cubeB;
  }

// BEST PRACTICE
// const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 

