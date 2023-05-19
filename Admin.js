import User from "./User.js";

//define exporta a classe 'Admin' que é uma extensão da classe 'User'
export default class Admin extends User {
  //O construtor é um método especial que é chamado quando um novo objeto da classe Admin é criado. 
  //Ele recebe parâmetros, incluindo nome, email, nascimento, role e ativo, com role e ativo tendo valores padrão definidos como "admin" e true, respectivamente. 
  //O construtor chama o construtor da classe pai (User) usando super, passando os parâmetros relevantes.
  constructor(nome, email, nascimento, role = 'admin', ativo = true) {
    //O uso de 'super' no construtor é uma maneira de estender a funcionalidade da classe pai na classe filha
    //Ao usar super(nome, email, nascimento, role, ativo) no construtor da classe 'Admin', estamos chamando o construtor da classe 'User'.
    super(nome, email, nascimento, role, ativo)
  }


  //Declaração dos metodos:
  //Métodos são ações ou operações que um objeto pode realizar.

  //'exibirInfos' retorna uma string que contém as informações do administrador
  exibirInfos() {
    return `${this.nome}, ${this.role}, ${this.ativo}`
  }
  //'criarCurso' retorna uma string que indica a criação de um curso com o nome fornecido e o número de vagas
  criarCurso(nomeDoCurso, vagas) {
    return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`
  }
}
