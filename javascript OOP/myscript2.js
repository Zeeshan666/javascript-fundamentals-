// JavaScript - constructors
function book(title,author,year){
this.title=title;
this.author=author;
this.year=year;

this.getsummary=function(){
    return `${this.title} is written  by ${this.author} on  ${this.year}; `

}
}

//instatiate an object

// var name=prompt("book name");
// var ath=prompt(" book ath");
// var yr =prompt(" book yr");
var book1 = new book("book one","jane","1950");
console.log(book1.getsummary());