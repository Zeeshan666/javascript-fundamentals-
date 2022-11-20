// JavaScript Function As Variable & Anonymous Function
var x = +prompt("enter value for x");
var y = +prompt("enter value for y");
var s = function sum(x, y) {
  return x + y;
};

// assgin a fuction to a variable

// use variable name to invoke the function
var z = s(x, y);

document.write(z + "<br>");

// define funciton without name
// anonymous function
var age = +prompt("enter your age");
var isAdult = function (age) {
  if (age >= 18) {
    return "Yes";
  } else {
    return "No";
  }
};

var k = isAdult(age);

document.write("Adult Status: " + k);

var getAge = function (age) {
  return 4;
};

var myAge = getAge(3);

document.write(myAge);
