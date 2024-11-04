class Loan {
  constructor(id, bookId, memberId, loanDate, returnDate = null) {
    this.id = id;
    this.bookId = bookId;
    this.memberId = memberId;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
  }

  closeLoan() {
    this.returnDate = new Date();
  }
}

module.exports = Loan;
