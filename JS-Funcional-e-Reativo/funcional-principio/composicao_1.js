function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce((acc, fn) => {
      return fn(acc);
    }, valor);
  };
}

function textoAlto(texto) {
  return texto.toUpperCase();
}
function textoAtencao(texto) {
  return `${texto} !!!`;
}
function textoEspacado(texto) {
  return texto.split("").join(" ");
}

// const resultado = composicao(textoAlto, textoAtencao, textoEspacado)("naylson");
// console.log(resultado);

const padraoGeral = composicao(textoAlto, textoAtencao, textoEspacado);
const resultado1 = padraoGeral("naylson");
const resultado2 = padraoGeral("naylson 2022");

console.log(resultado1);
console.log(resultado2);
