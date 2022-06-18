// é uma função impura pois depende do funcionamento no match.random
function gerarNumeroAleatorio(min, max) {
  const fator = max - min + 1;
  return parseInt(Math.random() * fator) + min;
}

console.log(gerarNumeroAleatorio(5, 10));
console.log(gerarNumeroAleatorio(5, 10));
console.log(gerarNumeroAleatorio(5, 10));
console.log(gerarNumeroAleatorio(5, 10));
console.log(gerarNumeroAleatorio(5, 10));
