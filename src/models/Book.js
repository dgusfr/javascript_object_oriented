class Book {
  constructor(id, title, author, year, copies) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
    this.copies = copies;
    this.availableCopies = copies;
  }

  lend() {
    if (this.availableCopies > 0) {
      this.availableCopies -= 1;
      return true;
    }
    return false;
  }

  returnBook() {
    if (this.availableCopies < this.copies) {
      this.availableCopies += 1;
      return true;
    }
    return false;
  }
}

module.exports = Book;
