//OBJECTIVE
// Love vs friendship

//LINK
// https://www.codewars.com/kata/59706036f6e5d1e22d000016

// INSTRUCTIONS
// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice stronger than love :-)

// The input will always be in lowercase and never be empty.

// MY SOLUTION
function wordsToMarks(string) {
  let n = string.length;
  let acc = 0;

  for (let i = 0; i < n; i++) {
    acc += parseInt(string[i], 36) - 9;
  }

  return acc;
}

// BEST PRACTICE
// const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
