// // JavaScript Functions With Parameters & Return

// // function with parameters

// function myfunc(x ,y){
// z=x+y;
// document.write(z)
// }

// //function call with arguments

// myfunc(3,5);

// // accpet function as a value
//  function parameterAsFunction ( func,num1,num2 ) {
// 	  var z= num1+num2;  
// 	func(z);
	
//  }

//  //parameterAsFunction(helloWorld,3,8 );

//  function helloWorld(num) {
	
// 	document.write("Hello, World. Function passed as an argument. here is result",num)
//  }



// // function with return statement
//  function returnSomeValue ( x, y ) {
// 	  	var k = x + y	
// return  k;	
// }

// var result = returnSomeValue( 10, 10 );
// var ndResult = returnSomeValue( 210, 120 );

// var z = result+ndResult

//  document.write("Returned value is " + z);


// functions as values

// document.write("Returned value is " + returnSomeValue( 10, 10 ) );










function firstAndLastName ( fullName,name,last ) {
	 if(name&&last){
		fullName(name,last)
	 }else{
		console.log("Something missig")
	 }
  
}

function fullName(a,b){
  console.log("from full name"+''+a+' '+b)
}



firstAndLastName(fullName,'ali','ahmed' );

firstAndLastName(fullName,'abc', );

firstAndLastName(fullName,'ali','ahmed' );

firstAndLastName(fullName,'abc','ww' );
firstAndLastName(fullName,'abc');










