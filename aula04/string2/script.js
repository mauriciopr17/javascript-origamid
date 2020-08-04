//console.log(typeof Array.from !== "undefined");

const comida = "Pizza";

const agua = new String("Água");

console.log(comida.length);

//última letra
console.log(comida[comida.length - 1]);

//última letra
console.log(comida.charAt(comida.length - 1));

const concatenar = "Concatenando";
console.log(concatenar + " uma forma.");
console.log(
  concatenar.concat(" outra forma,", " e podemos colocar outas coias...")
);

const fruta = "Banana";
const listaFrutas = "Melão, Banana, Maçã";

//includes -> pesquisa dento da String e retorna true or false
console.log(listaFrutas);
console.log(listaFrutas.includes(fruta));
console.log(listaFrutas.includes(fruta, 10));

//começa com (case sencitive)
console.log(fruta.startsWith("Ba"));

//começa com (case sencitive) -- boolean
console.log(fruta.endsWith("Ba"));

//slice -> muito utilizado
const transacao1 = "Depósito de Cliente";
const transacao2 = "Depósito de Fornecedor";
const transacao3 = "Taxa de camisas";

//recupera os três primeiros caracteres
console.log(transacao1.slice(0, 3));

//corta os 5 primeiros caracteres
console.log(transacao1.slice(5));

//de trás para frente
console.log(transacao1.slice(0, -7));

//retorna o index do caractere que indiquei
console.log(fruta.indexOf("a"));

//retorna o index do caractere que indiquei, começando do final
console.log(fruta.lastIndexOf("na"));
