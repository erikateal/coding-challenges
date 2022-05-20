//OBJECTIVE
// Drink about

//LINK
// https://www.codewars.com/kata/56170e844da7c6f647000063

// INSTRUCTIONS
// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.

// Rules:

// Children under 14 old.
// Teens under 18 old.
// Young under 21 old.
// Adults have 21 or more.
// Examples: (Input --> Output)

// 13 --> "drink toddy"
// 17 --> "drink coke"
// 18 --> "drink beer"
// 20 --> "drink beer"
// 30 --> "drink whisky"

// MY SOLUTION
function peopleWithAgeDrink(old) {
    if (old < 14) {
      return "drink toddy";
    }
    else if (old < 18) {
      return "drink coke";
    }
    else if (old < 21) {
      return "drink beer";
    }
    return "drink whisky";
  };

// BEST PRACTICE
// const peopleWithAgeDrink = (age) =>
//   age < 14 ? "drink toddy" :
//   age < 18 ? "drink coke" :
//   age < 21 ? "drink beer" : "drink whisky"
