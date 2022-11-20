// JavaScript Objects

// way #1 to define and create object using new keyword

// var person = new Object();
// person.firstName = "Russell";
// person.lastName = "Brown";
// person.height = 5.1;
// person.age = 25;
// person.fullName = function () {
//   return person.firstName + " " + person.lastName;
// };

// person.isEligibleForVote = function () {
//   if (person.age > 18) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(person.height);
// console.log(person.isEligibleForVote());

// way #2 to define and create object using object constructor
// this keyword means, the object itself

function Person(fName, lName, hg, age) {
  // console.log(this)
  this.firstName = fName;
  this.lastName = lName;
  this.height = hg;
  this.age = age;
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };

  this.isEligibleForVote = function () {
    if (this.age > 18) {
      return true;
    } else {
      return false;
    }
  };
}

var person1 = new Person("aliza", "a", 3, 23);
var person2 = new Person("ali", "b", 23, 42);
var person3 = new Person("ahmed", "c", 212, 4);

console.log(person1, person2, person3);

console.log(person3.fullName());
console.log(person3.isEligibleForVote());
// console.log(person1.firstName)
// var myBrother = new Person("Russell", "Brown", 5.10, 25);
// myBrother.firstName=prompt("enter name");
// var mySister = new Person("Sara", "Brown", 5.11, 18);

// alert(myBrother.firstName);
// alert(myBrother.fullName());

// alert(mySister.firstName);
// alert(mySister.fullName());

// way # 3 define and create object using object literal
// this is the easiest way to create JS Objects

var person = { firstName: "Russell",
               lastName: "Brown",
               height: 5.7,
               age: 25,
               fullName: function() {
                    return this.firstName + " " + this.lastName;
               }
             };

// alert(person.firstName);
// alert(person.fullName());
// alert(person["age"]);


console.log(person.fullName());
console.log(person['age'])
// object are changeable

// var x = person;

// x.firstName  = "Johan";

//alert(x.firstName);
//alert(person.firstName);

// delete property

// delete person.age;
// delete person["age"];
// alert(person.age);

// for in loop
//  var person = { firstName: "Russell", lastName: "Brown", height: 5.7, age: 25};

//  var v = "";
//  var k;

//  for(k in person) {

//      v = v + person[k] + " " ;

//  }

//  alert (v);

// nest an object
//  var user = { name: "Russell", age: 25,
//                  size: {
//                      top: 90,
//                      middle: 60,
//                      bottom: 90
//                  }
//  }
//  alert(user.name);
//  alert(user.size.top);
