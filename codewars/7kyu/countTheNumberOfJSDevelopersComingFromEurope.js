//OBJECTIVE
// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

//LINK
// https://www.codewars.com/kata/582746fa14b3892727000c4f

// INSTRUCTIONS
// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// MY SOLUTION
function countDevelopers(list) {
  let dev = list
    .map((x) => x.continent === "Europe" && x.language === "JavaScript")
    .filter((x) => x == true);
  return dev.length;
}

// BEST PRACTICE
// function countDevelopers(list) {
//   return list.filter(x=>x.continent=='Europe'&&x.language=='JavaScript').length
// }
