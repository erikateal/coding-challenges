//OBJECTIVE
// Valid Parentheses

//LINK
// https://www.codewars.com/kata/52774a314c2333f0a7000688

// INSTRUCTIONS
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// MY SOLUTION
function validParentheses(parens) {
    let openI = 0;
    let closeI =0;
    let openJ = 0;
    let closeJ = 0;
    let half = parens.length / 2;
    let firstHalf = parens.slice(0, half);
    let secondHalf = parens.slice(-half);
    
      for(let i=0; i < firstHalf.length; i++){
          if(firstHalf[i] === "("){
            openI++;
          } else if (firstHalf[i] === ")"){
            closeI++;
          }
        }
  
      for(let j=0; j < secondHalf.length; j++)
            if(secondHalf[j] === "("){
            openJ++;
          } else if (secondHalf[j] === ")"){
            closeJ++;
          }
      return openI >= openJ && openI === closeJ && closeI === openJ && parens.length % 2 === 0 && parens[0] !== ")" && parens[parens.length-1] !== "(" || parens.length === 0 ? true : false;
    }

// BEST PRACTICE
// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100
