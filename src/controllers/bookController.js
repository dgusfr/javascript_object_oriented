const LibraryDB = require("../database/LibraryDB");
const Book = require("../models/Book");
/*

 estatico deletalivbro(id){
 tente{
  livrariaDB.removelivro(id)
  "Livro removido"
  } catch (error) {
   "(error.messagem)"
   }
  }
 mudulo.exporta = livroController
 */

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

  static deleteBook(id) {}
}
