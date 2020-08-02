function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome}` + " " + `${this.sobrenome}`;
};

const p1 = new Pessoa("Maurício", "Pereira Archângelo", 32);

//listando métodos associados
Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

//listar os construtores

//const lista1 = Array.from(document.querySelectorAll("li"));
const lista1 = document.querySelector("li");
//lista1 = lista1.constructor -> HTMLLIELEMENT
//lista1.click = lista1.click.constructor.name -> Function
//lista1.innerText = lista1.innerText.constructor.name -> String
//
