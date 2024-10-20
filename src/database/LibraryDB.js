class LibraryDB {
  constructor() {
    this.books = [];
    this.members = [];
    this.loans = [];
  }

  addBook(book) {
    this.books.push(book);
    return book;
  }

  getBooks(filterFn = () => true) {
    return this.books.filter(filterFn);
  }

  updateBook(id, updatedData) {
    const index = this.books.findIndex((book) => book.id === id);
    if (index !== -1) {
      this.books[index] = { ...this.books[index], ...updatedData };
      return this.books[index];
    }
    throw new Error("Livro não encontrado.");
  }

  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
  }

  addMember(member) {
    this.members.push(member);
    return member;
  }

  getMembers(filterFn = () => true) {
    return this.members.filter(filterFn);
  }

  updateMember(id, updatedData) {
    const index = this.members.findIndex((member) => member.id === id);
    if (index !== -1) {
      this.members[index] = { ...this.members[index], ...updatedData };
      return this.members[index];
    }
    throw new Error("Membro não encontrado.");
  }

  removeMember(id) {
    this.members = this.members.filter((member) => member.id !== id);
  }

  addLoan(loan) {
    const book = this.books.find((book) => book.id === loan.bookId);
    const member = this.members.find((member) => member.id === loan.memberId);

    if (!book) {
      throw new Error("Livro não encontrado.");
    }
    if (!member) {
      throw new Error("Membro não encontrado.");
    }
    if (book.availableCopies <= 0) {
      throw new Error("Não há cópias disponíveis para empréstimo.");
    }

    book.availableCopies--;
    this.loans.push(loan);
    return loan;
  }

  getLoans(filterFn = () => true) {
    return this.loans.filter(filterFn);
  }

  updateLoan(id, updatedData) {
    const index = this.loans.findIndex((loan) => loan.id === id);
    if (index !== -1) {
      this.loans[index] = { ...this.loans[index], ...updatedData };
      return this.loans[index];
    }
    throw new Error("Empréstimo não encontrado.");
  }

  closeLoan(id) {
    const loan = this.loans.find((loan) => loan.id === id);
    if (!loan) {
      throw new Error("Empréstimo não encontrado.");
    }

    const book = this.books.find((book) => book.id === loan.bookId);
    if (book) {
      book.availableCopies++;
    }

    loan.returnDate = new Date();
    return loan;
  }

  removeLoan(id) {
    this.loans = this.loans.filter((loan) => loan.id !== id);
  }
}

module.exports = new LibraryDB();
