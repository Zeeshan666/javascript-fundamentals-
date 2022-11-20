// JavaScript - lierals


var book1 ={
    title:"book 1",
    author:"john doe",
    year:"2014",

    getsumary: function(){
        console.log(this);
        return `${this.title} is written  by ${this.author} on this ${this.year};
        `
    }

};
//console.log(book1.getsumary());
var book2 ={
   // title:prompt("enter book name"),
   title:"book 2",
    author:" queen maxy",
    year:"2016",
    getsumary: function(){
        console.log(this);
                return `${this.title} is written  by ${this.author} on this ${this.year}; `
    }
}
console.log(Object.keys(book2));
console.log(Object.values(book2));
console.log(book2.getsumary());
// console.log(book1.year);

// console.log(book1["year"]);
// console.log(book1);
// console.log(this);
// ;





