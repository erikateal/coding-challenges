<?php

// OBJECTIVE
// Even or Odd

// LINK
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe 

// INSTRUCTIONS
// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// MY SOLUTION
function even_or_odd(int $n): string {
  return ($n % 2 === 0) ? "Even" : "Odd";
}