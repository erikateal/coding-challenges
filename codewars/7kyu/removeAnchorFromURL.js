//OBJECTIVE
// Remove anchor from URL

//LINK
// https://www.codewars.com/kata/51f2b4448cadf20ed0000386

// INSTRUCTIONS
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// MY SOLUTION
function removeUrlAnchor(url){
    return url.split('#')[0];
  }

