//OBJECTIVE
// Sort the Gift Code

//LINK
// https://www.codewars.com/kata/52aeb2f3ad0e952f560005d3

// INSTRUCTIONS
// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

// Examples (Input -- => Output):
// "abcdef"                      -- => "abcdef"
// "pqksuvy"                     -- => "kpqsuvy"
// "zyxwvutsrqponmlkjihgfedcba"  -- => "abcdefghijklmnopqrstuvwxyz"

// MY SOLUTION
function sortGiftCode(code){
  return code.split('').sort().join('');
}

// BEST PRACTICE
// same as above

