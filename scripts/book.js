function addBook(id, title, author, year, copies) {
  libraryDB.books.push({
    id,
    title,
    author,
    year,
    copies,
    availableCopies: copies,
  });
}
