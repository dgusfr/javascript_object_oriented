class LibraryDB {
  constructor() {
    this.books = [];
    this.members = [];
    this.loans = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addMember(member) {
    this.members.push(member);
  }

  addLoan(loan) {
    this.loans.push(loan);
  }

  findBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  findMemberById(id) {
    return this.members.find((member) => member.id === id);
  }

  findLoanById(id) {
    return this.loans.find((loan) => loan.id === id);
  }
}

const libraryDB = new LibraryDB();
