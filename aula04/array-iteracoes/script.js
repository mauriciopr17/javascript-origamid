const frutas = ["Maçã", "Banana", "Pera"];
console.log(frutas);

//sempre quando quero modificar o array
//retornar algo novo
const frutasNovo = frutas.map((item, index, array) => {
  //  console.log(item, index, array);
  return item.toLocaleUpperCase();
});

console.log(frutasNovo);

//tabuada do 2
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tabuada = numeros.map((n) => n * 2);
console.log(tabuada);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 2,
  },
];

console.log(aulas);

const tempoAulas = aulas.map((n) => {
  return n.min;
});

console.log(tempoAulas);

//( ) o que está entr parênteses é o callbak
const nomeAulas = aulas.map((item) => {
  return item.nome;
});

console.log(nomeAulas);

// o mesmo que acima mas, com arrow function
const aulasArrowFunction = (aulas) => aulas.nome;
const arrayAulas = aulas.map(aulasArrowFunction);
console.log(arrayAulas);

//reduce
//resumo, tenho o valor anterior do array e o atual
const numerosArray = [10, 20, 30];
console.log(numerosArray);

const somaArray = numerosArray.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array);
  return acumulador + item;
}, 0);

console.log(somaArray);

//reduce identificando o maior valor
const numerosArray1 = [10, 20, 50, 30];
const maiorValor = numerosArray1.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
});
console.log(maiorValor);
