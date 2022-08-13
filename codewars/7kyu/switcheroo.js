//OBJECTIVE
// Switcheroo

//LINK
// https://www.codewars.com/kata/57f759bb664021a30300007d

// INSTRUCTIONS
// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

// MY SOLUTION
function switcheroo(x) {
  let arr = x.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") arr[i] = "b";
    else if (arr[i] === "b") arr[i] = "a";
  }
  return arr.join("");
}

// BEST PRACTICE
// const switcheroo=x=>x.replace(/[ab]/g,x=>x=="a"?"b":"a")
