console.log("Exercicios");

// adicione a classe ativo a todos os itens do menu
const novaClasse = document.querySelectorAll(".menu a");

novaClasse.forEach((item) => {
  item.classList.add("ativo");
});

//remova a classe ativo de todos os itens do menu e mantenha
// apenas o primeiro
novaClasse.forEach((item) => {
  item.classList.remove("ativo");
});

novaClasse[0].classList.add("ativo");

console.log(novaClasse);

//verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");

img.forEach((item) => {
  console.log(item, item.hasAttribute("alt"));
});

//adicione o href do link externo no menu
const link = document.querySelectorAll(".menu a");
link[link.length - 1].setAttribute("href", "http://www.google.com");
link.forEach((item) => {
  console.log(item);
});
