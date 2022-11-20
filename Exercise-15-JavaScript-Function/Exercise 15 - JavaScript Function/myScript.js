// JavaScript Functions

// function defination / declaration
function myFirstFunction() {
  // block of code
  document.write("Code execution inside function <br>");
}

// function call/invoke
myFirstFunction();

function getName(name) {
  console.log("hello world" + " " + name + "");
}

function calculator(x, y, oper) {
  if (oper == "add") {
    var z = x + y;
    console.log(z);
  } else if (oper == "sub") {
    var z = x - y;
    console.log(z);
  } else if (oper == "mul") {
    var z = x * y;
    console.log(z);
  } else if (oper == "div") {
    var z = x / y;
    console.log(z);
  } else if (oper == undefined) {
    alert("Please add operator");
  }
}

calculator(134, 5, "add");

calculator(24, 35, "sub");

calculator(14, 225, "mul");

calculator(14, 542, "div");

calculator(14, 542);
getName(33);
getName("a");
getName("c");
getName("v");
getName("v2");
