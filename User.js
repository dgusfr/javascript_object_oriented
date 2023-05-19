export default class User {
  //definição de atributos privados 
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome
    this.#email = email
    this.#nascimento = nascimento
    this.#role = role || 'estudante'
    this.#ativo = ativo
  }


  //getters (métodos de acesso) 
  //Retornam o valor da propriedade correspondente usando a sintaxe (Ex: return this.#nome) 
  get nome() {
    return this.#nome
  }

  get email() {
    return this.#email
  }

  get nascimento() {
    return this.#nascimento
  }

  get role() {
    return this.#role
  }

  get ativo() {
    return this.#ativo
  }

  //setter (método de modificação)
  set nome(novoNome) {
    //verifica se a string é vazia:
    if (novoNome === '') {
      //atribui o novo valor da propriedade usando 'this'
      throw new Error('formato não válido')
    }
    this.#nome = novoNome
  }

  //Este 'exibirInfos' aparece em outros lugares do codigo, o que difere é o comportamento interno dele, parametros que ele recebe, POLIMORFISMO:
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
  }
}
