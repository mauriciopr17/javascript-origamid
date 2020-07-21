console.log("-------- Exercícios -------");

//mostre no console cada parágrafo do site
const paragrafos = document.querySelectorAll("p");
paragrafos.forEach(function (item) {
  console.log(item);
});

//motrar os textos dos parágrafos no console
paragrafos.forEach(function (item) {
  console.log(item.innerText);
});

//como corrigir os erros abaixo
const imgs1 = document.querySelectorAll("img");
imgs1.forEach((item, index) => {
  console.log(item, index);
});

let j = 0;
imgs1.forEach(() => {
  console.log(j++);
});

imgs1.forEach(() => i++);
