//OBJECTIVE
// Pillars

//LINK
// https://www.codewars.com/kata/5bb0c58f484fcd170700063d

// INSTRUCTIONS
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

// MY SOLUTION
function pillars(pill, dist, width) {
    dist = dist*100
    if(pill <= 1){
      return 0  
    } else if (pill <= 2){
      return dist
    }
      return (width*(pill-2)) + (dist * (pill - 1))
  }

// BEST PRACTICE
// function pillars(num_pill, dist, width) {
//   return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
// }

