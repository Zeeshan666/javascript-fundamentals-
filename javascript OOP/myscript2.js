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
//console.log(book1.getsummary());



function newBook(title,author){
    this.title=title,
    this.author=author;
    this.getsummary =function (){
      return `${this.title} is written  by ${this.author} on  ${this.year}; `
    }
};





 let myBook1= new newBook('JS',"ABc");
 let myBook2= new newBook('JS1',"ABc1");
 let myBook3= new newBook('JS2',"ABc2");

 console.log(myBook1.title);
 console.log(myBook2.getsummary());
 console.log(myBook3.author);