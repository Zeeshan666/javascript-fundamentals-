//ES6 sub classes
class Bookz {
    constructor  (title,year,author){
        
       this.title=title;
       this.year=year;
       this.author=author;


    }

    getsummary(){
       return `${this.title} is written  by ${this.author} on  ${this.year}; `


    }
   
//megazine






}
class megazinee extends Bookz{
    constructor(title,year,author,month){
        super(title,year,author)

        this.month=month;

    }

}

const mag11 = new megazinee ("zedan",'1978','john elia','feb' )
console.log(mag11.month);
console.log(mag11.getsummary());