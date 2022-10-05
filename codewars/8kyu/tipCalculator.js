//OBJECTIVE
// Tip Calculator

//LINK
// https://www.codewars.com/kata/56598d8076ee7a0759000087

// INSTRUCTIONS
// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

// Terrible: tip 0%
// Poor: tip 5%
// Good: tip 10%
// Great: tip 15%
// Excellent: tip 20%
// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

// "Rating not recognised"

// MY SOLUTION
function calculateTip(amount, rating) {
  rating = rating.toLowerCase();

  if (rating == "excellent") {
    return Math.ceil(amount * 0.2);
  } else if (rating == "great") {
    return Math.ceil(amount * 0.15);
  } else if (rating == "good") {
    return Math.ceil(amount * 0.1);
  } else if (rating == "poor") {
    return Math.ceil(amount * 0.05);
  } else if (rating == "terrible") {
    return 0;
  } else {
    return "Rating not recognised";
  }
}

// BEST PRACTICE
// const TIPS = {
//   "terrible": 0.0,
//   "poor": 0.05,
//   "good": 0.1,
//   "great": 0.15,
//   "excellent": 0.2
// };

// const calculateTip = (amount, rating) => {
//   rating = rating.toLowerCase();

//   return rating in TIPS ? Math.ceil(TIPS[rating] * amount) : "Rating not recognised";
// };
