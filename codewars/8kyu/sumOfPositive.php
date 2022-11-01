<?php

// OBJECTIVE
// Sum of positive

// LINK
// https://www.codewars.com/kata/5715eaedb436cf5606000381

// INSTRUCTIONS
// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY SOLUTION
function positive_sum($arr) {
  $sum = [];
  for($i=0; $i<count($arr); $i++){
    if($arr[$i] === abs($arr[$i])){
      array_push($sum, ($arr[$i]));
    }
  }
  return array_sum($sum);
}

// BEST PRACTICE
// function positive_sum($a) {
//   return array_sum(array_filter($a, function ($n) {return $n > 0;}));
// }