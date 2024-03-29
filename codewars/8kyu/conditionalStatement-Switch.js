//OBJECTIVE
// Training JS #8: Conditional statement--switch

//LINK
// https://www.codewars.com/kata/572059afc2f4612825000d8a

// INSTRUCTIONS
// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// MY SOLUTION
function howManydays(month) {
  let days;
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      days = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      days = 30;
      break;
    case 2:
      days = 28;
  }
  return days;
}

// BEST PRACTICE
// function howManydays(month){
//   switch (month){
// 		case 2: return 28
// 		case 4:
// 		case 6:
// 		case 9:
// 		case 11: return 30
//  }
//  return 31
// }
