// objeto1
const user = {
  nome: "João",
  email: "j@j.com",
  nascimento: "2021/01/01",
  role: "estudante",
  ativo: true,
  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};

// objeto2
const admin = {
  nome: "Maria",
  email: "m@m.com",
  role: "admin",
  criarCurso() {
    console.log("curso criado!");
  },
};

//definindo o objeto 'user' como o protótipo do objeto admin.
//Caso o objeto 'admin' não tenha uma propriedade ou método específico, ele irá procurar por essa propriedade ou método no objeto 'user'.
Object.setPrototypeOf(admin, user);
admin.criarCurso();
//o método exibirInfos() não é encontrado no objeto admin, mas é encontrado no protótipo 'user' e "Mariana m@m.com" é impresso no console
admin.exibirInfos();
