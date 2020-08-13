const times = ["Corinthians", "Santos", "Palmeiras", "São Paulo"];

console.log(times);

//ordenando o conteúdo do array
console.log(times.sort());

//ordenando decrecente
console.log(times.reverse());

//remove o último item do array e retorna ele
console.log(times.pop());

//remove o primeiro item do array e retorna ele
console.log(times.shift());

//adiciona no último item do array e retorna o length dele
console.log(times.push("Bragantino"));

//adiciona no início do array e retorna o length dele
console.log(times.unshift("Botafogo SP"));

console.log(times.sort());

//adiona itens no array após index que informei
console.log(times.splice(1, 0, "Corinthians"));
console.log(times.splice(2, 0, "Flamengo", "Coritiba"));

//remove itens no array após index que informei e insere o novo
console.log(times.splice(1, 1, "Fluminense"));

console.log(times.splice(1, 0, "Corinthians", "Batatais"));

//copyWithin copia itens do array seguindo intervalo
const item = ["Item1", "Item2", "Item3", "Item4", "Item5"];
console.log(item);
console.log(item.copyWithin(1, 0, 3));

//coloca o valor no array respeitando o intervalo
const frutas = ["Maça", "Uva", "Morango", "Abacaxi"];
console.log(frutas.fill("Banana", 1, 3));

//concatenando array
console.log(item.concat(frutas));
console.log([].concat(item, frutas));
console.log(item.concat("Teste", frutas));

const linguagens = ["Java", "Js", "Oracle", "ABAP", "Js", "HTML"];

//retorna booelan se encontrou no array
console.log(linguagens.includes("Js"));

//retorna a primeira posição do array que encontrou o valor que busquei
console.log(linguagens.indexOf("Js"));

//retorna a primeira posição do array que encontrou o valor que busquei, decrescente
console.log(linguagens.lastIndexOf("Js"));

//junta array em uma string única
console.log(linguagens.join(", "));

//retorna os itens do array conforme index que passei
console.log(linguagens.slice(1, 3));
