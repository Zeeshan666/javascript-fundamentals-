//ES6 CLASSeS
class Book {
  constructor(title, year, author) {
    this.title = title;
    this.year = year;
    this.author = author;
  }

  getsummary() {
    return `${this.title} is written  by ${this.author} on  ${this.year}; `;
  }

  revise(newyear) {
    this.year = newyear;
    this.revise = true;
  }
  getage() {
    return this.title + " " + "is " + this.year + " " + "years old";
  }

  static gettostore() {
    return `fakir`;
  }
}

//instantite obj

const book23 = new Book("john", " 1956", "mack", "2014");

console.log(book23);
console.log(book23.getage());
console.log(Book.gettostore());
