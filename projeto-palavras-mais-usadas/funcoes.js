const fs = require("fs"); // função que lê o conteúdo de um arquivo
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      // tenta executar a função abaixo e se der erro, o catch vai ser executado
      const arquivos = fs.readdirSync(caminho);
      const arquivosCompletos = arquivos.map((arquivo) => {
        return path.join(caminho, arquivo);
      });
      resolve(arquivosCompletos);
    } catch (erro) {
      reject(erro);
    }
  });
}

function lerArquivo(caminho) {
  return new Promise((resolve, reject) => {
    try {
      const conteudo = fs.readFileSync(caminho, { encoding: "utf-8" });
      resolve(conteudo.toString());
    } catch (erro) {
      reject(erro);
    }
  });
}
// retorna um array de promisses
function lerArquivos(caminhos) {
  return Promise.all(caminhos.map((caminho) => lerArquivo(caminho)));
}

function elementosTerminadosCom(padrao) {
  return function (array) {
    return array.filter((el) => el.endsWith(padrao));
  };
}

function removerElementosSeVazio(array) {
  return array.filter((el) => el.trim());
}

function removerElementosseIncluir(array, padrao) {
  return function (array) {
    return array.filter((el) => !el.includes(padrao)); // ! = negação
  };
}

function removerElementosSeApenasNumeros(array) {
  return array.filter((el) => {
    const num = parseInt(el.trim());
    return num !== num; // num !== num é verdadeiro se num for NaN
  });
}

function removerSimbolos(simbolos) {
  return function (array) {
    return array.map((el) => {
      return simbolos.reduce((acc, simbolo) => {
        return acc.split(simbolo).join("");
      }, el);
    });
  };
}

function mesclarConteudos(array) {
  return array.join(" ");
}

function separarTextoPor(simbolo) {
  return function (texto) {
    return texto.split(simbolo);
  };
}

function agruparElementos(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const el = palavra.toLowerCase();
      const qtde = acc[el] ? acc[el].qtde + 1 : 1;
      acc[el] = { elemento: el, qtde };
      return acc;
    }, {}) //  <== valor inicial objeto vazio
  );
}

function ordernarPorAtributoNumerico(attr, ordem = "asc") {
  return function (array) {
    const asc = (a, b) => a[attr] - b[attr];
    const desc = (a, b) => b[attr] - a[attr];
    return [...array].sort(ordem === "asc" ? asc : desc);
  };
}

// exporta as funções para index.js
module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerElementosSeVazio,
  removerElementosseIncluir,
  removerElementosSeApenasNumeros,
  removerSimbolos,
  mesclarConteudos,
  separarTextoPor,
  agruparElementos,
  ordernarPorAtributoNumerico,
};
