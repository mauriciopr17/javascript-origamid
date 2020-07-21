const menu = document.querySelector(".menu");
console.log(menu);

//lista de classes
console.log(menu.classList);

//adicionando classe
menu.classList.add("ativo", "add");

//removendo classe
menu.classList.remove("menu1");

//adiciona quando não tem e remove quando tem
menu.classList.toggle("inativo");
menu.classList.toggle("ativo");

//verificando se existe, retorna boolean
if (menu.classList.contains("ativo")) {
  menu.classList.add("tem-ativo");
} else {
  menu.classList.add("nao-tem-ativo");
}

//outra forma className
menu.className += menu.className + " class-name";

//atributes
const atributos = document.querySelector(".animais");
console.log(atributos.attributes[1].textContent);

//getAtributtes
const get = document.querySelector("img");
console.log(get.getAttribute("src"));
console.log(get.getAttribute("alt"));

//setAtributtes
get.setAttribute("alt", "Texto");

//verificando se existe o atributo
const temAtributo = get.hasAttribute("alt");
console.log(temAtributo);

//removendo;
get.removeAttribute("alt");
