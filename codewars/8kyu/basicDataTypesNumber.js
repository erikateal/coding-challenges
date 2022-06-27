//OBJECTIVE
// Training JS #2: Basic data types--Number

//LINK
// https://www.codewars.com/kata/571edd157e8954bab500032d

// INSTRUCTIONS
// In JavaScript, Number is one of basic data types. It can be positive: 1,2,3, negative:-1,-100 , integer:123,456, decimal:3.1415926,-8.88 etc..

// Numbers can use operators such as + - * / %

// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// MY SOLUTION
var v1=50,v2=100,v3=150,v4=200,v5=2,v6=250
function equal1(){
  var a=v1   
  var b=v1   
  return a+b;
}
//Please refer to the example above to complete the following functions
function equal2(){
  var a= v4
  var b= v2
  return a-b;
}
function equal3(){
  var a= v1
  var b= v5
  return a*b;
}
function equal4(){
  var a= v4
  var b= v5
  return a/b;
}
function equal5(){
  var a= v2
  var b= v4
  return a%b;
}

// BEST PRACTICE
// var v1=50;v2=100,v3=150,v4=200,v5=2,v6=250

// const equal1 = () => v1 + v1
// const equal2 = () => v3 - v1
// const equal3 = () => v1 * v5
// const equal4 = () => v4 / v5
// const equal5 = () => v2 % v4