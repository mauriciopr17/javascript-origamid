const imgs = document.querySelectorAll("img");

imgs.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// transformando um htlmcollection em um array
console.log("transformando um htlmcollection em um array");

const titulo = document.getElementsByClassName("titulo");
const arrayTitulo = Array.from(titulo);

arrayTitulo.forEach(function (item) {
  console.log(item);
});

console.log("Arrow function");
imgs.forEach((item) => {
  console.log(item);
});

let i = 0;
console.log("Tendência");
imgs.forEach(() => console.log(i++));
