# JavaScript e Orientação a Objetos

![Descrição da Imagem](img/proj.png)

## Sumário

1. [User.js](#userjs)
2. [Admin.js](#adminjs)
3. [index.js](#indexjs)
4. [new.js](#newjs)
5. [docente.js](#docentejs)
6. [Objetoliteral.js](#objetoliteraljs)
7. [Conclusão](#conclusão)

## User.js

O código define uma classe `User` com propriedades privadas (`#nome`, `#email`, `#nascimento`, `#role`, `#ativo`) e métodos para acessar e modificar essas propriedades. A classe também possui um método `exibirInfos()` que retorna uma string formatada com as informações do usuário.

## Admin.js

O código define uma classe `Admin` que estende a classe `User`. O construtor da classe `Admin` chama o construtor da classe `User` e define o papel (`role`) como "admin" por padrão. Além disso, há um método `criarCurso` específico para a classe `Admin`.

## index.js

Importa a classe `Docente` e cria uma instância dela chamada `novoDocente`. Em seguida, chama o método `exibirInfos()` da instância criada.

## new.js

Define um objeto literal chamado `user` com métodos `init` e `exibirInfos`. Em seguida, cria um novo objeto `novoUser` usando `Object.create` e chama os métodos.

## docente.js

Define uma classe `Docente` que estende a classe `User`. O construtor da classe `Docente` chama o construtor da classe `User` e define o papel (`role`) como "docente" por padrão. Além disso, há um método `aprovaEstudante` específico para a classe `Docente`.

## Objetoliteral.js

Cria dois objetos literais (`user` e `admin`). Define `user` como protótipo de `admin` usando `Object.setPrototypeOf`. Isso significa que se uma propriedade ou método não for encontrado em `admin`, ele será procurado em `user`. Demonstração disso com o método `exibirInfos()`.

## Conclusão

Cada arquivo lida com a criação e manipulação de diferentes tipos de usuários (`User`, `Admin`, `Docente`) e demonstra conceitos como herança, protótipos e criação de objetos.
