//OBJECTIVE
// Counting Duplicates

//LINK
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

// INSTRUCTIONS
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// MY SOLUTION
function duplicateCount(text) {
  text = text.toLowerCase().split("");
  let dup = [];

  for (let i = 0; i < text.length; i++) {
    for (let j = i + 1; j < text.length; j++) {
      if (text[i] == text[j]) {
        dup.push(text[j]);
      }
    }
  }

  let uniqueChars = [...new Set(dup)];
  if (dup.length === 0) {
    return 0;
  }
  return uniqueChars.length;
}

// BEST PRACTICE
// function duplicateCount(text){
//   return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }
