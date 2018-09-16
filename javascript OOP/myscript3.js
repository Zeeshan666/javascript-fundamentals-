// JavaScript - prototype
function book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    
  
    }

//prototype

    book.prototype.getsummary=function(){
        return `${this.title} is written  by ${this.author} on  ${this.year}; `

    };
    //get age prototype
    book.prototype.getage = function(){
var years = new Date().getFullYear() - this.year;
return this.title + " "+ "is " + years + " " + "years old"
    };

//revise 
book.prototype.revise= function (newyear){

this.year=newyear;
this.revise=true;

};




 //instatiate an object
  var book1 = new book("book one","jane","1950");
  book1.revise("2018")
   console.log(book1.getsummary());
   console.log(book1.getage());
   console.log(book1);