const animais = document.querySelector(".animais-lista");
console.log(animais.scrollHeight);
console.log(animais.clientHeight);
console.log(animais.firstElementChild);

const primeiroH2 = document.querySelector("h2");
const rect = primeiroH2.getBoundingClientRect();
console.log(rect);
console.log(rect.height);

console.log(
  window.innerHeight,
  window.innerWidth,
  window.outerHeight,
  window.outerHeight,
  window.pageXOffset,
  window.pageYOffset
);

if (window.innerWidth < 600) {
  console.log("Tela menor que 600 px");
}

const small = window.matchMedia("(max-width: 600px)");

if (small.matches) {
  console.log("Maior que 600 px");
} else {
  console.log("Menor que 600 px");
}
