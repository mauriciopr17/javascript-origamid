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
