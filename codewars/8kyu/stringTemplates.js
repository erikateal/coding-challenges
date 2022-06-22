//OBJECTIVE
// String Templates - Bug Fixing #5

//LINK
// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f

// INSTRUCTIONS
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

// MY SOLUTION
function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }

// BEST PRACTICE
// same as above
