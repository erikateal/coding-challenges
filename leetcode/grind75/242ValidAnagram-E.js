//OBJECTIVE
// 242. Valid Anagram

//LINK
// https://leetcode.com/problems/valid-anagram/

// INSTRUCTIONS
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false


// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.


// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

// MY SOLUTION
var isAnagram = function(s, t) {
	s = s.split('').sort().join('')
	t = t.split('').sort().join('')
	console.log(s, t)
	return s == t ? true : false
};
