//OBJECTIVE
// No oddities here

//LINK
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

// INSTRUCTIONS
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// MY SOLUTION
function noOdds( values ){
  let evens=[];
  for(let i=0; i<values.length; i++){
  if(values[i]%2===0){evens.push(values[i])}
  }
  return evens
}

// BEST PRACTICE
// function noOdds( values ){
  // function isEven(number){
	// 	return number%2 == 0;
	// 	}
		
	// 	return values.filter(isEven);
	// }
 
