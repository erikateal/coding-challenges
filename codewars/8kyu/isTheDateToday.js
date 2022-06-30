//OBJECTIVE
// Is the date today

//LINK
// https://www.codewars.com/kata/563c13853b07a8f17c000022

// INSTRUCTIONS
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

// MY SOLUTION
function isToday(date) {
    return new Date().toDateString() === date.toDateString();
  }

// WHAT I LEARNED
// The toDateString() method returns the date portion of a Date object in English in the following format separated by spaces:

// First three letters of the week day name
// First three letters of the month name
// Two digit day of the month, padded on the left a zero if necessary
// Four digit year (at least), padded on the left with zeros if necessary