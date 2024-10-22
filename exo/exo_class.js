class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.dispo = true;
  }
  borrow() {
    if (this.dispo) {
      this.dispo = false;
    } else {
      console.log("This book isn't available");
    }
  }
  returnB() {
    if (!this.dispo) this.dispo = true;
    else {
      console.log("This book was already returned");
    }
  }
}

class Biblio {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    this.books.push(book);
  }
  borrowBook(title) {
    let error = true;
    for (const e of this.books) {
      if (e.title.localeCompare(title) == 0) {
        e.borrow();
        console.log("borrowing validated");
        error = false;
        break;
      }
    }
    if (error) {
      console.log("This book isn't in our library");
    }
  }
  returnBook(title) {
    let error = true;
    for (const e of this.books) {
      if (e.title.localeCompare(title) == 0) {
        e.returnB();
        console.log("return validated");
        error = false;
        break;
      }
    }
    if (error) {
      console.log("This book isn't in our library");
    }
  }
}

let bouquin = new Book("title", "author");
console.log(bouquin);
let biblio = new Biblio("Yuno");
biblio.addBook(bouquin);
console.log(biblio.books);
biblio.borrowBook("title");
biblio.returnBook("title");
biblio.borrowBook("title7");
biblio.returnBook("title7");
