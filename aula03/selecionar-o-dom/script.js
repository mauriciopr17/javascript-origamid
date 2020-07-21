//selecionando pelo id
const animais = document.getElementById("animais");
console.log(animais);

const nomeClasse = document.getElementsByClassName("grid-section");
console.log(nomeClasse);

const classeMenu = document.getElementsByTagName("ul");
console.log(classeMenu[2]);

//seleciona como se fosse css
//retorna o primeiro item encontrado
const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const primeiraLi = primeiraUl.querySelector("li");
console.log(primeiraLi);

//^ indica começa com
const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

//também muito usado
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg);

const gridHtmlSelection = document.getElementsByClassName("grid-section");
const gridSelectionNode = document.querySelectorAll(".grid-section");

//adicionando classe "ao vivo"
primeiraUl.classList.add("grid-selection");

//este vai mostrar o item adicionado acima
console.log(gridHtmlSelection);

//esse não mostra
console.log(gridSelectionNode);

//for each
gridSelectionNode.forEach(function (item, index) {
  console.log(item);
});
