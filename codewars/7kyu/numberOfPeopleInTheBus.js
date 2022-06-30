//OBJECTIVE
// Number of People in the Bus

//LINK
// https://www.codewars.com/kata/5648b12ce68d9daa6b000099

// INSTRUCTIONS
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// MY SOLUTION
var number = function(busStops){
    return busStops.map(arr => arr[0] - arr[1]).reduce((acc,c) => acc+c, 0)
  }

// BEST PRACTICE
// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);
