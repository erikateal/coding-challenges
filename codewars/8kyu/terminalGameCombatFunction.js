//OBJECTIVE
// Grasshopper - Terminal game combat function

//LINK
// https://www.codewars.com/kata/586c1cf4b98de0399300001d

// INSTRUCTIONS
// Create a combat function that takes the player's current health and the amount of damage recieved, and returns the player's new health. Health can't be less than 0.

// MY SOLUTION
function combat(health, damage) {
    return health-damage >= 0 ? health-damage : 0;
   }

// BEST PRACTICE
// function combat(health, damage) {
//   return health < damage ? 0 : health - damage
// }
