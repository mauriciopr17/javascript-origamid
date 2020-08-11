//utilizando o foreach no array some tudo
//o que é taxa e recebimento

const transacoes = [
  {
    descricao: "Taxa do Pão",
    valor: "R$ 39",
  },
  {
    descricao: "Taxa do Mercado",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento de Cliente",
    valor: "R$ 99",
  },
  {
    descricao: "Taxa do Banco",
    valor: "R$ 129",
  },
  {
    descricao: "Recebimento do Cliente",
    valor: "R$ 49",
  },
];

let vlrTaxa = 0;
let vlrRecebimento = 0;

transacoes.forEach(function (item) {
  if (item.descricao.slice(0, 4) === "Taxa") {
    //vlrTaxa += parseInt(item.valor.slice(2));
    //converte para numérico também +item.valor.slice(2);
    vlrTaxa += parseInt(item.valor.slice(2));
  } else {
    vlrRecebimento += parseInt(item.valor.slice(2));
  }
});

console.log("Total Taxa " + vlrTaxa);
console.log("Total Recebimento " + vlrRecebimento);

//retorne um array com a lista abaixo
const transportes = "Carro;Avião;Trem;Ônibus;Bicicleta";

console.log(transportes.split(";"));

//retorne o último caractere da frase
const frase = "Melhor do ano";

console.log(frase.charAt(frase.length - 1));

//retorne o total de taxax
const transacoes2 = [
  "Taxa do Banco",
  "TAXA DO PÃO",
  " taxa do mercado",
  "depósito Bancário",
  "TARIFA especial",
];

let contaTaxas = 0;
transacoes2.forEach((item) => {
  //console.log(item.toLocaleLowerCase().trim().slice(0, 4));

  if (item.toLocaleLowerCase().trim().slice(0, 4) === "taxa") {
    contaTaxas += 1;
  }
});

console.log(contaTaxas);
