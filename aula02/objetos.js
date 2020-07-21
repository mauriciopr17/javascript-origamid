var pessoa = {
  nome: "Maurício",
  idade: 32,
};

console.log(pessoa.nome);

//adicionando nova propriedade ao objeto
pessoa.sobrenome = "Pereira Archângelo";

//o objeto tem acesso a variáveis fora dele

//verificando se existe a propriedade no objeto
//hasOwnProperty return true or false
pessoa.hasOwnProperty("idade");

// dentro do objeto podemos ter métodos como propriedades
var quadrado = {
  lados: 4,
  area: function (lado) {
    return lado * lado;
  }, //outra forma é
  perimetro(lado) {
    return this.lados * lado;
  },
};

// objetos que mostra os dados pessoais
var dadosPessoais = {
  nome: "Maurício",
  sobrenome: "Pereira Archângelo",
  idade: 32,
  nomeCompleto: function () {
    return this.nome + " " + this.sobrenome;
  },
};

//objeto cachorro
var cachorro = {
  raca: "Labrador",
  cor: "Preto",
  latir: function (pessoa) {
    if (pessoa === "Homem") {
      return console.log("Latiu");
    } else {
      return console.log("Nada");
    }
  },
};

cachorro.idade = 10;

//tudo é objeto
var novoNome = "Maurício";

novoNome.toLowerCase;

/// Exercícios
var btn = document.querySelector("a");
console.log(btn);

//copiando texto para Ctrl C + Ctrlv
//clipboard
function copiarTexto() {
  const inputTexto = document.querySelector("input");

  inputTexto.select();

  document.execCommand("copy");
}
