const LibraryDB = require("../database/LibraryDB");
const Loan = require("../src/models/Loan");

class LoanController {
  static createLoan(loanId, bookId, memberId) {
    const newLoan = new Loan(loanId, bookId, memberId, new Date());
    try {
      LibraryDB.addLoan(newLoan);
      console.log("Empréstimo registrado com sucesso.");
    } catch (error) {
      console.error(`Erro ao registrar o empréstimo: ${error.message}`);
    }
  }

  static getLoans(filterFn = null) {
    return LibraryDB.getLoans(filterFn);
  }

  static closeLoan(loanId) {
    try {
      LibraryDB.closeLoan(loanId);
      console.log("Empréstimo encerrado com sucesso.");
    } catch (error) {
      console.error(`Erro ao encerrar o empréstimo: ${error.message}`);
    }
  }

  static deleteLoan(loanId) {
    try {
      LibraryDB.removeLoan(loanId);
      console.log(`Empréstimo de ID ${loanId} removido com sucesso.`);
    } catch (error) {
      console.error(error.message);
    }
  }
}

module.exports = LoanController;
