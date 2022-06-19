//OBJECTIVE
// Convert to Binary

//LINK
// https://www.codewars.com/kata/59fca81a5712f9fa4700159a

// INSTRUCTIONS
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */

// MY SOLUTION
function toBinary(n){
    return Number(n.toString(2))
  }

// BEST PRACTICE
// let toBinary = n => +n.toString(2)

// WHAT I LEARNED
// .toString(2) converts numbers tot he base 2 positional numeral system. Only works for + numbers

// function dec2Bin(dec){
//     if(dec >= 0) {
//         return dec.toString(2);
//     }
//         return (~dec).toString(2);
//     }
// }