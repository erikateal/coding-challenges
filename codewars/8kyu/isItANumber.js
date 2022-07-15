//OBJECTIVE
// Is it a number?

//LINK
// https://www.codewars.com/kata/57126304cdbf63c6770012bd

// INSTRUCTIONS
// Given a string s, write a method (function) that will return true if its a valid single integer or floating number or false if its not.

// Valid examples, should return true:

// isDigit("3")
// isDigit("  3  ")
// isDigit("-3.23")
// should return false:

// isDigit("3-4")
// isDigit("  3   5")
// isDigit("3 5")
// isDigit("zero")

// MY SOLUTION
function isDigit(s) {
    return s==parseFloat(s);
   }

// WHAT I LEARNED
// Syntax parseFloat(string)
// Parameters string
// If this argument is not a string, then it is converted to one using the ToString abstract operation. Leading whitespace in this argument is ignored.
// Return value
// A floating point number parsed from the given string.
// Or NaN when the first non-whitespace character cannot be converted to a number.
