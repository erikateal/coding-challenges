//OBJECTIVE
// Define a card suit

//LINK
// https://www.codewars.com/kata/5a360620f28b82a711000047

// INSTRUCTIONS
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

// MY SOLUTION
function defineSuit(card) {
  
  
    if(card.includes('♣')){
      return('clubs');
    } else if (card.includes('♠')){
      return('spades');
    } else if (card.includes('♦')){
      return('diamonds');
    } else (card.includes('♥'))
      return ('hearts');
   }

// BEST PRACTICE
// function defineSuit(card) {
//   const s = {
//     "♣": "clubs",
//     "♠": "spades",
//     "♦": "diamonds",
//     "♥": "hearts"
//   }
//   return s[card.charAt(card.length - 1)]
// }
