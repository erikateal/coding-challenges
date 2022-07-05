//OBJECTIVE
// Remove duplicate words

//LINK
// https://www.codewars.com/kata/5b39e3772ae7545f650000

// INSTRUCTIONS
// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

// Example:

// Input:

// 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

// Output:

// 'alpha beta gamma delta'

// MY SOLUTION
function removeDuplicateWords (s) {
    let arr = s.split(' ');
    return [...new Set(arr)].join(' ')
}

// BEST PRACTICE
// const removeDuplicateWords = s => [...new Set(s.split(' '))].join(' ')
