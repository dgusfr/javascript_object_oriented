function listBooks() {
  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";
  libraryDB.books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${book.id}, Título: ${book.title}, Autor: ${book.author}, Ano: ${book.year}, Cópias disponíveis: ${book.availableCopies}`;
    bookList.appendChild(li);
  });
}

function listMembers() {
  const memberList = document.getElementById("memberList");
  memberList.innerHTML = "";
  libraryDB.members.forEach((member) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${member.id}, Nome: ${member.name}, Email: ${member.email}`;
    memberList.appendChild(li);
  });
}

function listLoans() {
  const loanList = document.getElementById("loanList");
  loanList.innerHTML = "";
  libraryDB.loans.forEach((loan) => {
    const li = document.createElement("li");
    li.textContent = `ID: ${loan.id}, Livro ID: ${loan.bookId}, Membro ID: ${
      loan.memberId
    }, Data Empréstimo: ${loan.loanDate}, Data Devolução: ${
      loan.returnDate || "Pendente"
    }`;
    loanList.appendChild(li);
  });
}

document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addBook(
    parseInt(document.getElementById("bookId").value),
    document.getElementById("bookTitle").value,
    document.getElementById("bookAuthor").value,
    parseInt(document.getElementById("bookYear").value),
    parseInt(document.getElementById("bookCopies").value)
  );
  alert("Livro adicionado com sucesso.");
  e.target.reset();
});

document
  .getElementById("addMemberForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    addMember(
      parseInt(document.getElementById("memberId").value),
      document.getElementById("memberName").value,
      document.getElementById("memberEmail").value
    );
    alert("Membro adicionado com sucesso.");
    e.target.reset();
  });

document.getElementById("addLoanForm").addEventListener("submit", function (e) {
  e.preventDefault();
  addLoan(
    parseInt(document.getElementById("loanId").value),
    parseInt(document.getElementById("loanBookId").value),
    parseInt(document.getElementById("loanMemberId").value)
  );
  e.target.reset();
});

document
  .getElementById("closeLoanForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    closeLoan(parseInt(document.getElementById("closeLoanId").value));
    e.target.reset();
  });
