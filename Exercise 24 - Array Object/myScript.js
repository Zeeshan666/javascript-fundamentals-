// // JavaScript Array Object

// // create array using new keyword
//var myColors = new Array("Red", "Green", "Blue");
// // alternate syntax
 var myColors = ["Red", "Green", "Blue"];

 document.write(myColors[0] + "<br>");

// // modify array element
 myColors[1] = "Yellow";
document.write(myColors[1] + "<br>");

// // access all elements of an array
 document.write(myColors + "<br>");

// // array properties & methods
// // find length of an array 
 document.write(myColors.length + "<br>");

// // sort an array alphabetically
document.write(myColors.sort() + "<br>");

// // reverse an array 
 document.write(myColors.reverse() + "<br>");

// // add element from an array
myColors.push("Pink");
 document.write(myColors + "<br>");

// // remove elemnt from an array
myColors.pop();
myColors.unshift('Orange')
document.write(myColors +'  ' +'add orange'+"<br>");
myColors.unshift('black')
document.write(myColors + '  '+'add black'+"<br>");
myColors.shift()
document.write(myColors + ' remove black' +"<br>");
 //add in first



// join two or more arrays
var listOfNumber1 = [1,2,3,111,1111];
var listOfNumber2 = [4,66,6,11];
var allNumbers = listOfNumber1.concat(listOfNumber2);
document.write(allNumbers.sort() + "<br>");

// // loop through array elements
 var myCars = ["BMW", "Honda", "Toyota"];

for ( var i = 0; i <= myCars.length - 1; i++ ) {
	
	document.write(myCars[i] + "<br>");
	
}

// // array objects
//  var myCars = [
//  			{ model: "BMW", year: 2016 },
//  			{ model: "Honda", year: 2011 },	
//  			{ model: "Toyota", year: 2015}
//  ];
// // k is an array item
//  for ( var k = 0; k < myCars.length; k++ ) {
	
//  	var myCar = "";
//  	// cp is car property
//  	for ( cp in myCars[k] ) {
		
//  		myCar = myCar + myCars[k][cp];
		
//  	}
//  	document.write(myCar + "<br>");
	
//  }













// function myArray(){
// 	var nameList=['ali','ahmed','aa','vv'];
// 	return nameList;

// }

//  var names =myArray()






//  for(var i=0 ;i<names.length;i++){
// 	if(i%2==0){
// 		console.log(names[i],i)
// 	}
   
//  }
 //property of array//
//  console.log(names.length)
// console.log(names[4])



const fruits = ["Banana", "Orange", "Apple", "Mango","2Banana", "2Orange", "2Apple", "2Mango"];


console.log(fruits.toString());


console.log(fruits.join('-'))



const citrus = fruits.slice(2,2);


console.log(citrus,fruits)



const points = [40, 100, 1, 5, 25, 10]; 

console.log(points.sort(function(a,b){return a -b}));