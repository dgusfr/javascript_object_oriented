function addLoan(id, bookId, memberId) {
  const book = libraryDB.books.find((book) => book.id === bookId);
  const member = libraryDB.members.find((member) => member.id === memberId);

  if (!book || !member) {
    alert("Livro ou membro não encontrado!");
    return;
  }

  if (book.availableCopies <= 0) {
    alert("Não há cópias disponíveis para empréstimo.");
    return;
  }

  book.availableCopies -= 1;
  libraryDB.loans.push({
    id,
    bookId,
    memberId,
    loanDate: new Date(),
    returnDate: null,
  });
  alert("Empréstimo registrado com sucesso.");
}

function closeLoan(id) {
  const loan = libraryDB.loans.find((loan) => loan.id === id);

  if (!loan || loan.returnDate) {
    alert("Empréstimo não encontrado ou já encerrado.");
    return;
  }

  const book = libraryDB.books.find((book) => book.id === loan.bookId);
  if (book) {
    book.availableCopies += 1;
  }

  loan.returnDate = new Date();
  alert("Empréstimo encerrado com sucesso.");
}
