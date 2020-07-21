//window.alert("Mensagem de alerta!!!");
//window.alert(window.location);

const href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);

h1Selecionado.addEventListener("click", function () {
  console.log("Clicou em ", h1Selecionado);
});

function callbackh1() {
  console.log("Clicou em ", h1Selecionado.innerText);
}

h1Selecionado.addEventListener("click", callbackh1);
