//OBJECTIVE
// Row Weights

//LINK
// https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9

// INSTRUCTIONS
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

// Notes
// Array size is at least 1.
// All numbers will be positive.
// Input >> Output Examples
// rowWeights([13, 27, 49])  ==>  return (62, 27)
// Explanation:
// The first element 62 is the total weight of team 1, and the second element 27 is the total weight of team 2.

// rowWeights([50, 60, 70, 80])  ==>  return (120, 140)
// Explanation:
// The first element 120 is the total weight of team 1, and the second element 140 is the total weight of team 2.

// rowWeights([80])  ==>  return (80, 0)
// Explanation:
// The first element 80 is the total weight of team 1, and the second element 0 is the total weight of team 2.

// MY SOLUTION
function rowWeights(array){
  let total1 = 0
  let total2 =0
  
  for(let i=0; i<array.length; i++){
    if(i % 2 !== 0) {
      total2 += array[i]
    } else {
      total1 += array[i]
    }
  }
  
  return [total1, total2]
}

// BEST PRACTICE
// function rowWeights(array){
//   let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
//   let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
  
//   return [t1, t2]
// }
