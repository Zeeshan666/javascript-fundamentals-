// JavaScript built-in Date & Math objects

// Date object handles date & time
// Syntax to create Date object

// current date
 //var dt  = new Date();
//alert(dt);

//miilliseconds
// dt = new Date(5878999999855);
// alert(dt);

// date string
// dt = new Date("august 8, 2018");
// alert(dt);

// date with year, month,  day,hour, minute, second 
// dt = new Date(2003,4,17,10,30,50); // month argument range from 0-11
// alert(dt);


// Date object get methods
var dtm = new Date();


// get Date
document.write("Date: " + dtm.getDate() + "<br>");

// get Day
document.write("Day: " + dtm.getDay() + "<br>"); // range from 0-6

// get Month
document.write("Month: " + dtm.getMonth() + "<br>"); // range from 0-11

// get full year
document.write("Full year: " + dtm.getFullYear() + "<br>");

// get hours
document.write("Hours:" + dtm.getHours() + "<br>");

// get mintues
document.write("Mintues: " + dtm.getMinutes() + "<br>");

// get seconds
document.write("Seconds: " + dtm.getSeconds() + "<br>");


// Math object handles mathematical operations

// var sqrt = Math.sqrt(20); // returns the square root of 20
// document.write("Square root = " + sqrt + "<br>"); 

// // look for minimum value
// var min = Math.min(10,12,3,11,15);
// document.write("Minimum: " + min + "<br>"); 

// // look for maximum value
// var max = Math.max(10,12,3,11,15);
// document.write("Maximum: " + max + "<br>"); 

// // round a number
//  var rnd = Math.ceil(99.3);
//  document.write("ciel: " + rnd + "<br>"); 
//  var rnd = Math.floor(99.8);
//  document.write("floor: " + rnd + "<br>");
// // random number

// var rdm = Math.ceil(Math.random()*7);
 //document.write("Random: " + rdm + "<br>"); 

// PI property
//  var pi = Math.PI;
//  document.write("PI: " + pi + "<br>"); 













