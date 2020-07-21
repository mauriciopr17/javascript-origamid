//retorne o url da págin atual utilizando o objeto window
const url = window.location.href;
console.log(url);

//seleciona o primeiro elemento da página que possua a classe ativo
//const classeAtivo = document.getElementsByClassName("ativo");
//query selector sempre seleciona o primeiro
const classeAtivo = document.querySelector(".ativo");
console.log(classeAtivo);

//retornar a linguagem do navegador
const idioma = window.navigator.language;
console.log(idioma);

//retorna a largura da janela
const largura = window.innerHeight;
console.log(largura);
