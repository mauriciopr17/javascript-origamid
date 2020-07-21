//adicionar a classe ativo nos links internos
//quando o usuário clicar neles e remover os demais
//itens caso eles possuem a mesma

console.log("Exercícios");
const link = document.querySelectorAll('a[href^="#"]');

function addClasseAtivo(e) {
  e.preventDefault(); //previne padrão

  //removendo a classe ativo de todos os links
  link.forEach((link) => {
    link.classList.remove("ativo");
  });

  e.currentTarget.classList.add("ativo");
}

link.forEach((link) => {
  link.addEventListener("click", addClasseAtivo);
  //  link.classList.toggle("ativo");
});

//selecionar todos os elementos do site começando pelo body
//ao clicar mostrar exatamente qual elemento está sendo clicado
const elementos = document.querySelectorAll("body *");

function clicouElemento(e) {
  console.log(e.currentTarget);
  //e.currentTarget.remove();
}

elementos.forEach((elementos) => {
  elementos.addEventListener("click", clicouElemento);
});

//se o usuário está pressionando na tecla t
//aumente todo o texto do site

function teclaT(e) {
  if (e.key == "t") {
    //documento é o documento em si
    //documetElement é o HTML
    document.documentElement.classList.toggle("html");
  }
}

window.addEventListener("keydown", teclaT);
