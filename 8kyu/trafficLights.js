//OBJECTIVE
// Thinkful - Logic Drills: Traffic light

//LINK
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// INSTRUCTIONS
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

// Note: Use "" instead of '' in C++.

// MY SOLUTION
function updateLight(current) {
    if(current === 'green'){
    return 'yellow'
    }else if(current === 'yellow'){
    return 'red'
    }
    return 'green'
  }

// BEST PRACTICE
// function updateLight(current) {
//     return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
//   }