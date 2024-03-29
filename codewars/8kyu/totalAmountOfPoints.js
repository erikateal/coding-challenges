//OBJECTIVE
// Total amount of points

//LINK
// https://www.codewars.com/kata/5bb904724c47249b10000131

// INSTRUCTIONS
// Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// MY SOLUTION
function points(games) {
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    if (games[i][0] > games[i][2]) {
      sum += 3;
    } else if (games[i][0] === games[i][2]) {
      sum += 1;
    } else {
      sum += 0;
    }
  }
  return sum;
}

// BEST PRACTICE
// const points=games=>games.reduce((output,current)=>{
// 	return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)
