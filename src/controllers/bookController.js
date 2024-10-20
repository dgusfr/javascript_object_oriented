const LibraryDB = require("../database/LibraryDB");
const Book = require("../models/Book");
/*
classe Livrocontroler :
 estatico adicioLivro(id, titulo, autor, ano, e copia){
  novo livro recebe new livro(id, titulo, autor, ano, e copia)
  livraryDB.adicionalivo(novolicro)
  "LIvro adicionado com sucesso"
 }

 estativco pegalivros(){
 retorna livrariaDB.égalivros()
 }

 estatico atualiza livros(id,atualizaDados){
 tente{
 atualizalivro recebe livrariadb.atualizalivro(id, atualizaDados)}
 "Livro atualizado"
 retuna atualizalivro
 }

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

  static;
}
