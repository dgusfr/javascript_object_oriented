class App {
  addBook(id, title, author, year, copies) {
    const book = new Book(id, title, author, year, copies);
    libraryDB.addBook(book);
    alert(`Livro "${title}" adicionado com sucesso.`);
  }

  addMember(id, name, email) {
    const member = new Member(id, name, email);
    libraryDB.addMember(member);
    alert(`Membro "${name}" adicionado com sucesso.`);
  }

  addLoan(id, bookId, memberId) {
    const book = libraryDB.findBookById(bookId);
    const member = libraryDB.findMemberById(memberId);

    if (!book || !member) {
      alert("Livro ou membro não encontrado!");
      return;
    }

    if (!book.lend()) {
      alert("Não há cópias disponíveis para empréstimo.");
      return;
    }

    const loan = new Loan(id, bookId, memberId);
    libraryDB.addLoan(loan);
    alert("Empréstimo registrado com sucesso.");
  }

  closeLoan(id) {
    const loan = libraryDB.findLoanById(id);

    if (!loan || loan.returnDate) {
      alert("Empréstimo não encontrado ou já encerrado.");
      return;
    }

    const book = libraryDB.findBookById(loan.bookId);
    book.returnBook();
    loan.closeLoan();
    alert("Empréstimo encerrado com sucesso.");
  }

  listBooks() {
    const bookList = document.getElementById("bookList");
    bookList.innerHTML = "";
    libraryDB.books.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${book.id}, Título: ${book.title}, Autor: ${book.author}, Ano: ${book.year}, Cópias disponíveis: ${book.availableCopies}`;
      bookList.appendChild(li);
    });
  }

  listMembers() {
    const memberList = document.getElementById("memberList");
    memberList.innerHTML = "";
    libraryDB.members.forEach((member) => {
      const li = document.createElement("li");
      li.textContent = `ID: ${member.id}, Nome: ${member.name}, Email: ${member.email}`;
      memberList.appendChild(li);
    });
  }

  listLoans() {
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
}

const app = new App();

document.getElementById("addBookForm").addEventListener("submit", function (e) {
  e.preventDefault();
  app.addBook(
    parseInt(document.getElementById("bookId").value),
    document.getElementById("bookTitle").value,
    document.getElementById("bookAuthor").value,
    parseInt(document.getElementById("bookYear").value),
    parseInt(document.getElementById("bookCopies").value)
  );
  e.target.reset();
});

document
  .getElementById("addMemberForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    app.addMember(
      parseInt(document.getElementById("memberId").value),
      document.getElementById("memberName").value,
      document.getElementById("memberEmail").value
    );
    e.target.reset();
  });

document.getElementById("addLoanForm").addEventListener("submit", function (e) {
  e.preventDefault();
  app.addLoan(
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
    app.closeLoan(parseInt(document.getElementById("closeLoanId").value));
    e.target.reset();
  });
