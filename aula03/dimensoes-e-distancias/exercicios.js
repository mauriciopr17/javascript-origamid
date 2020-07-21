console.log("Exercícios");

//verifique a distância da primeira imagem
//em relação ao topo da página
const img = document.querySelector("img");
console.log(img.offsetTop);

//retorna a soma da largura de todas as imagens
console.log("Exercício 2");

function somaImagens() {
  let soma = 0;

  const todasImgs = document.querySelectorAll("img");
  todasImgs.forEach(function (item, index) {
    console.log(item.offsetWidth);
    soma += item.offsetWidth;
  });

  console.log("Soma ", soma);
}

//função de callback
//só é ativada quando o onload ocorre
// se não tem que esperar todas as imagens carregarem
window.onload = function () {
  somaImagens();
};

//verique se links da página tenham o mínino recomendado
//para o mobile

const link = document.querySelectorAll("a");
link.forEach(function (link) {
  if (link.offsetWidth >= 48 && link.offsetHeight >= 48) {
    console.log(link, "Link possui acessibilidade.");
  } else console.log(link, "Não possui acessibilidade.");
});

//se o browser for menor que 720px
//adiciona a classe menu-mobile ao menu
//const altura = window.innerHeight;
//const largura = window.innerWidth;
//if (altura + largura >= 720) {

const janela = window.matchMedia("(max-width: 720px)").matches;

if (janela) {
  const menuMobile = document.querySelector(".menu");
  menuMobile.classList.add(".menu-mobile");
}

//console.log("Janela ", altura + largura);
