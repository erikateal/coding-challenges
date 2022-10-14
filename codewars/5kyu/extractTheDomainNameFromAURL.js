//OBJECTIVE
// Extract the domain name from a URL

//LINK
// https://www.codewars.com/kata/514a024011ea4fb54200004b

//INSTRUCTIONS
// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//MY SOLUTION
function domainName(url) {
  url = url
    .split("http://")
    .join("")
    .split("https://")
    .join("")
    .split("www.")
    .join("")
    .split(".");

  return url[0].toString();
}
//BEST PRACTICE
// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };
