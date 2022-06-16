//OBJECTIVE
// You only need one

//LINK
// https://www.codewars.com/kata/57cc975ed542d3148f00015b

// INSTRUCTIONS
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// MY SOLUTION
function check(a, x) {
  if (a.includes(x)){
    return true;
  } else {
    return false;
  }
}

// BEST PRACTICE
// const check = (a,x) => a.includes(x);

// WHAT I LEARNED
// .includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.