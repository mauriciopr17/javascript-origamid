var idade = 20;

var podeBeber;
var naoPossuiDiabetes = true;

podeBeber = idade >= 18 && naoPossuiDiabetes ? "Sim" : "Não";

console.log(podeBeber);

//some 500 a variável abaixo
var scroll = 500;

scroll += 500;
console.log(scroll);

//atribuir true a variável darCredito, caso o cliente possua carro e casa

var possuiCarro = true;
var possuiCasa = true;
var darCredito;

//darCredito = ( possuiCarro === true && possuiCasa === true ) ? true : false;
darCredito = possuiCarro && possuiCasa ? true : false;
console.log(darCredito);
