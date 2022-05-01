//OBJECTIVE
// Unfinished Loop - Bug Fixing #1

//LINK
// https://www.codewars.com/kata/55c28f7304e3eaebef0000da

// INSTRUCTIONS
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// MY SOLUTION
function createArray(number){
    let newArray = [];
    for(let counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    return newArray;
  }

// BEST PRACTICE
// same as above
