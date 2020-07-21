console.log(" ------ Escopo -------");
/*declaração de variável
var var1;
let let1;
const const1;
ambiente = 'dev'; //global, não usar
*/
/* comento que normalmente usa o const e o let para variáveis que mudam o valor */

//dentro do código tudo que não muda o valor será const
const pais = "Brasil";

/*quando o script é executado, é feito o hosting e todas as variáveis são lidas no início do arquivo, mesmo que estejam no final*/

/*observe que desta forma
podemos alterar o valor quando usamos var*/
var cidade = "Batatais";
if (cidade === "Batatais") {
  cidade = "Orlândia";
}
console.log(cidade);

/*observe que desta forma
podemos alterar o valor quando usamos var*/

if (cidade === "Batatais") {
  let cidade1 = "Orlândia";
}
//aqui da erro, porque cidade1 é uma variável de escopo, ou seja, usada apenas dentro do if
//cidade1;
//console.log(cidade1);

//exercícios
//por qual motivo o código abaixo retorna erro
{
  var cor = "preto";
  const marca = "Fiat";
  let portas = 4;

  // aqui funciona console.log(var, marca,portas);
}

// todas as variáveis só valem dentro do seu escopo {}
//console.log(var, marca,portas);
//console.log(cor);

//console.clear();
//como corrigir o erro abaixo
const dois = 2;
function somarDois(x) {
  // retira ele daqui const dois = 2;
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(4));

// o que fazer para o total retornar 500
console.log("retornar 500");
var numero = 50;

for (var numero = 0; numero <= 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

// o que fazer para o total retornar 500
console.log("retornar 500 - correção");
const numero1 = 50;

for (let numero1 = 0; numero1 <= 10; numero1++) {
  console.log(numero1);
}

const total1 = 10 * numero1;
console.log(total1);
