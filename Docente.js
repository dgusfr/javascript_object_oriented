import User from "./User.js";

//Define e exporta a classe 'docente':
export default class Docente extends User {
  constructor(nome, email, nascimento, role = 'docente', ativo = true) {
    //é um metodo especial que é chamado quando um novo objeto da classe Docente é criado, chama o construtor da classe pai (User) usando super, passando os parâmetros.
    super(nome, email, nascimento, role, ativo)
  }
  
  //método personalizado da classe Docente que recebe dois parâmetros: estudante e curso. Ele retorna uma string que indica que o estudante passou no curso especificado.
  //Os valores de estudante e curso são incorporados à string usando a sintaxe de template string (${estudante} e ${curso}).
  aprovaEstudante(estudante, curso) {
    return `estudante ${estudante} passou no curso ${curso}.`
  }
}

