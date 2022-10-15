//OBJECTIVE
// Break camelCase

//LINK
// https://www.codewars.com/kata/5208f99aee097e6552000148

//INSTRUCTIONS
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

//MY SOLUTION
function solution(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (string[i].toLowerCase() == string[i]) continue;
    string.splice(i, 0, " ");
    i++;
  }
  return string.join("");
}

//BEST PRACTICE
//function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }
