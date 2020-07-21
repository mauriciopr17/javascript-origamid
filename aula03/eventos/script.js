const img = document.querySelector("img");
console.log(img);

function clicou() {
  console.log("Clicou");
}

// não fazer assim porque senão ela já é executada
//img.addEventListener("click", clicou());
//correto
img.addEventListener("click", clicou);

function fncClicou(event) {
  console.log(event);
  console.log(event.type);
  console.log(event.target);
  console.log(event.currentTarget);
}

img.addEventListener("click", fncClicou);

const linkExeterno = document.querySelector('a[href^="http"]');

function mantemPadrao(e) {
  e.preventDefault();
  console.log(e);
}

linkExeterno.addEventListener("click", mantemPadrao);
//console.log(linkExeterno);

const h1 = document.querySelector("h1");

function handleEvent(e) {
  console.log(e.type, e);
}

// h1.addEventListener("click", handleEvent);
// h1.addEventListener("mouseenter", handleEvent);
// h1.addEventListener("mousemove", handleEvent);

// window.addEventListener("scroll", handleEvent);
// window.addEventListener("keydown", handleEvent);
// window.addEventListener("resize", handleEvent);

function pressTecla(e) {
  if (e.key === "f") {
    window.alert("Pressionou");
  }
}

window.addEventListener("keydown", pressTecla);
