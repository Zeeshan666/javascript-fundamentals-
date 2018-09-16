// JavaScript Functions With Parameters & Return

// function with parameters

// function myfunc(x ,y){
// z=x+y;
// document.write(z)
// }

// function call with arguments

// myfunc(3,5);

// accpet function as a value
//  function parameterAsFunction ( func ) {
	
// 	func();
	
//  }

//  parameterAsFunction(helloWorld );

//  function helloWorld() {
	
// 	document.write("Hello, World. Function passed as an argument.")
//  }



// function with return statement
 function returnSomeValue ( x, y ) {
	  	var k = x + y	
return  k;
}

var result = returnSomeValue( 10, 10 );

 document.write("Returned value is " + result);


// functions as values

// document.write("Returned value is " + returnSomeValue( 10, 10 ) );







