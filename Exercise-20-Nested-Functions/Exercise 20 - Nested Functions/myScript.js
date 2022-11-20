// JavaScript Nested Functions

// nested function`
function outerFunction() {
  function innerFunction() {
    document.write("Code execution inside nested function<br>");
  }

 innerFunction();
}

outerFunction();

// scoping rules clousre
function outerFunction2(x, y) {
  var d = 20;
  function innerFunction2() {
    var g = d + 10 + x - y;

    document.write("g = " + g + "<br>");
    document.write("d = " + d + "<br>");
    document.write("x = " + x + "<br>");
    document.write("y = " + y + "<br>");
  }
  innerFunction2();
}

outerFunction2(30, 40);

function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
