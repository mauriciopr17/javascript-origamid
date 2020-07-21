console.log("Exercícios");

//retorne no console todas as imagens do

const imagens = document.querySelectorAll("img");
console.log(imagens);

//retorne apenas as imagens que começaram com a palavra imagem
const nomeImagens = document.querySelectorAll('img[src^="img/imagem"]');
console.log(nomeImagens);

//selecione todos os itens internos onte o href começa com #
// quando indica 'a' pega link interno e externo
//const selecionaLink = document.querySelectorAll('a[href^="#"]');
const selecionaLink = document.querySelectorAll('[href^="#"]');
console.log(selecionaLink);

//seleciona o primeio h2 dentro de animais descricao
const primeiroH2 = document.querySelector(".animais-descricao h2");
console.log(primeiroH2);

const retornaH2 = document.querySelector(".animais-descricao");
const selecionaH2 = retornaH2.querySelector("h2");
console.log(selecionaH2);

//seleciona o último p do site
const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);
