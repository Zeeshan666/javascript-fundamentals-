var d = new Date();
console.log(d);

const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
console.log(d.getDate());
console.log(Date.now());
console.log(days[d.getDay()]);
console.log();

const element = document.getElementById("demo");


const myInterval = setInterval(myTimer, 1000);

function myTimer() {
  const date = new Date();
  document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}


function myStop() {
    clearInterval(myInterval);
  }
