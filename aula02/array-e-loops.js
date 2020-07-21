var times = ["Corinthians", "Barcelona", "Boca Juniors"];

//remove último elemento do array
times.pop();

//adiciona elemento na última posição
times.push("Real Madrid");

for (var item = 0; item < times.length; item++) {
  console.log(times[item]);
}

console.log("------array forEach------");

var frutas = ["Banana", "Uva", "Melão", "Mamão"];

frutas.forEach(function (fruta, index) {
  console.log(fruta, index);
});

console.log("------exercícios------");

//array com os anos que Brasil ganhou a Campo

var anosCopas = [1959, 1962, 1970, 1994, 2002];

anosCopas.forEach(function (anos) {
  console.log("O Brasil ganhou a copa de " + anos);

  //template trim
  console.log(`O Brasil ganhou a copa de ${anos}`);
});

var frutas = ["Banana", "Uva", "Melão", "Pera", "Mamão"];

for (var indice = 0; indice < frutas.length; indice++) {
  console.log(frutas[indice]);

  if (frutas[indice] === "Pera") {
    break;
  }
}
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);

/*
function serializeSendSmsRequest(
  msg,
  from,
  mobile,
  messageId,
  aggregateId,
  schedule,
  callbackOption
) {
  var string = '{"sendSmsRequest":  { "aggregateId" : "' + aggregateId + '", ';
  string = string + '"msg" : "' + msg + '", ';
  string = string + '"id" : "' + messageId + '", ';
  string = string + '"from" : "' + from + '", ';
  string = string + '"to" : "' + mobile + '", ';
  string = string + '"schedule" : "' + schedule + '", ';
  string = string + '"callbackOption" : "' + callbackOption + '" ';

  string = string + " } } ";

  //return $.parseJSON(string);
  return JSON.parse(string);
}
 */
