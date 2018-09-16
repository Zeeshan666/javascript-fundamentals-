// JavaScript Number Type & Number

// create a number using new keyword

var n = new Number(15);

document.write(n + "<br>");

document.write("Primitive Value: " + n.valueOf() + "<br>");

// create number just by assigning to variable
var n = 15.5;
document.write(n + "<br>");

// check for valid number
var numberCheck = 20 + "t";
document.write(numberCheck + " is not valid number: " + isNaN(numberCheck) + "<br>");

// to string

var myNumber = 555;
document.write(myNumber.toString() + "<br>");
var z=myNumber.toString();
document.write(typeof(z)+"<br/>");


var exp =56.67678;
document.write(exp.toExponential(2)+"<br/>")
//toFixed() returns a string, with the number written with a specified number of decimals:


document.write(exp.toFixed(2) +"<br/>")


document.write(exp.toFixed(4) +"<br/>")