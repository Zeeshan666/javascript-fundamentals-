/*
        ASSIGNMENT OPERTORS
        -------------------
        
    OPERATOR    EXAMPLE     SAME AS
    --------    -------     -------
    =           x = y 
    +=          x += y      x = x + y
    -=          x -= y      x = x - y
    *=          x *= y      x = x * y
    /=          x /= y	    x = x / y
    %=          x %= y	    x = x % y
    
*/

var myFirstName;
myFirstName = 'ali';

console.log(myFirstName)
// assignment operator
var x = 50;

// // addition assignment operator
  x += 20;

 console.log(x)
 x += 5;    
  x = x + 5;

 
console.log(x)


document.write("Addition assignment: ");
document.write(x+'<br/>');

// document.write("<br>");     //html line break


//subtraction assignment operator
var x = 20;
 x -= 5;  
 x = x - 5;
document.write("Subtraction assignment: ");
document.write(x +'<br/>');

// document.write("<br>");     //html line break

// multiplication assignment operator
var x = 20;
 x *= 5;   //x = x * 5;
document.write("Multiplication assignment: ");
document.write(x);
document.write("<br>");     //html line break
// // division assignment operator
                                                                      
document.write("Division assignment: ");

var x = 20;
 x /= 5;   //x = x / 5;
document.write(x);
document.write("<br>");     //html line break
// // modulus assignment operator
var x = 20;
// x %= 5;
x = x % 5;

document.write("Modulus assignment: ");
 document.write(x);

document.write("<br>");     //html line break
