// JavaScript - Object.create()
// obj protos
 const  bookprotos ={

    getsummary: function (){
        return `${this.title} is written  by ${this.author} on  ${this.year}; `

    },
   getage : function (){
    return this.title + " "+ "is " + years + " " + "years old"

}

 }

 //create object
 const boook2= Object.create(bookprotos);
 boook2.title="book one";
 boook2.author=" john doe";
 boook2.year=" 1945";

 const boook1 =Object.create(bookprotos,{
title:{value : 'john the knight'},
year:{value : "2103"},
author:{value : "john doe "},

 });
 console.log(boook1);
 console.log(boook2.year);

