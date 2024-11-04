const LibraryDB = require("./LibraryDB");
const Book = require("../src/models/Book");

class BookController {
  static addBook(id, title, author, year, copies) {
    const newBook = new Book(id, title, author, year, copies);
    LibraryDB.addBook(newBook);
    console.log(`Livro ${title} adicionado com sucesso`);
  }

  static getBooks(filterFn = null) {
    return LibraryDB.getBooks(filterFn);
  }

  static updateBook(id, updatedData) {
    try {
      const updatedBook = LibraryDB.updateBook(id, updatedData);
      console.log(`Livro de ID ${id} atualizado com sucesso.`);
      return updatedBook;
    } catch (error) {
      console.log(error.message);
    }
  }

  static deleteBook(id) {
    try {
      LibraryDB.removeBook(id);
      console.log(`Livro de id ${id} removido com sucesso`);
    } catch (error) {
      console.log(error.message);
    }
  }
}
