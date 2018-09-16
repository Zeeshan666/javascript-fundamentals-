// JavaScript String Type & String Object

// create a string using new keyword

var ss = new String("This is America");

document.write(ss + "<br>");

var s = "This is USA";

document.write(s + "<br>");

// add sepcial characters into string

var myString = "This is \"vanilla\"";
document.write(myString + "<br>");

var myString = "This is \'vanilla\' ice";
document.write(myString + "<br>");

var myString = "This is \\vanilla\\ ice cream";
document.write(myString + "<br>");

// string properties and methods
var myQuestion = "Where do you live?";

// lenght of string
document.write("Lenght: " + myQuestion.length + "<br>");

// index of
var z=prompt("enter the index of string");
document.write("Index Of: " + myQuestion.indexOf(z) + "<br>");

// sbu string
var y=+prompt("enter the index of string to crop");
var x=+prompt("limit the index of string");
document.write(myQuestion.slice(y, x) + "<br>");

// replace string
document.write(myQuestion.replace("live", "go") + "<br>");

// uppercase
document.write(myQuestion.toUpperCase() + "<br>");

// lowercase
document.write(myQuestion.toLowerCase() + "<br>");

// character at
document.write(myQuestion.charAt(2) + "<br>");




















