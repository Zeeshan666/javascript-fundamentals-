// JavaScript -inheritence
function book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

book.prototype.getsummary = function () {
  return `${this.title} is written  by ${this.author} on  ${this.year}; `;
};
//megazine constructor
function megazine(title, author, year, month) {
  book.call(this, title, author, year);
  this.month = month;
}
//inherit prototype of parents
megazine.prototype = Object.create(book.prototype);

//instatiate an object
var mag1 = new megazine(" mag pls", "jhon doe", "2014", "january");
var book1 = new book(" mag pls", "jhon doe", "2014");

console.log(book1);
console.log(mag1);
console.log(mag1.getsummary());
