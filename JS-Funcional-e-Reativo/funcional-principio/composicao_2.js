function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
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
function tornarLento(texto) {
  return new Promise((resolve, reject) => {
    resolve(texto.split(" ").join(" "));
  }, 3000);
}

const exagerado = composicao(textoAlto, textoAtencao, textoEspacado);
const umPoucoMenos = composicao(textoAlto, textoAtencao);

exagerado("naylson").then(console.log);

umPoucoMenos("naylson Promisse").then(console.log);
