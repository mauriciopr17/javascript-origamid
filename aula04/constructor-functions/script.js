//construtor
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
  this.NomeCompleto = function () {
    return this.nome + " " + this.sobrenome;
  };
}

Pessoa.prototype.andar = function () {
  return this.nome + " andou";
};

const pereira = new Pessoa("Maurício", "Pereira Archângelo", 32);

//console.log(pereira);

const listaAnimais = ["Cachorro", "Gato", "Passáro"];

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};

//nodelist para array
const lista = document.querySelectorAll("li");
Array.from(lista);

//recuperando as propriedades do objeto
Object.getOwnPropertyNames(Pessoa.prototype);
// (2) ["constructor", "andar"]
// 0: "constructor"
// 1: "andar"
// length: 2
// __proto__: Array(0)
