//OBJECTIVE
// Calculate BMI

//LINK
// https://www.codewars.com/kata/57a429e253ba3381850000fb

// INSTRUCTIONS
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// MY SOLUTION
function bmi(weight, height) {
    let BMI = weight/Math.pow(height,2);
    if (BMI <= 18.5) {
      return 'Underweight';
    } else if (BMI <= 25.0) {
      return 'Normal';
    } else if (BMI <= 30.0) {
      return 'Overweight';
    } else {
      return "Obese";
    }
  }
  
  // BEST PRACTICE
  // same as above  
  
  // WHAT I LEARNED
  // Math.pow(base, exponent) & if/else practice