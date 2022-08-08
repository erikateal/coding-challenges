//OBJECTIVE
// Find Nearest square number

//LINK
// https://www.codewars.com/kata/5a805d8cafa10f8b930005ba

// INSTRUCTIONS
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// MY SOLUTION
function nearestSq(n) {
	let a = Math.sqrt(n);
	let b = Math.round(a);
	return Math.pow(b,2);
}

// BEST PRACTICE
// const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);

