const fs = require("fs"); // função que lê o conteúdo de um arquivo
const path = require("path");

function lerDiretorio(caminho) {
  return new Promise((resolve, reject) => {
    try {
      // tenta executar a função abaixo e se der erro, o catch vai ser executado
      let arquivos = fs.readdirSync(caminho);
      arquivos = arquivos.map((arquivo) => path.join(caminho, arquivo));
      resolve(arquivos);
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

function elementosTerminadosCom(array, padrao) {
  return array.filter((el) => el.endsWith(padrao));
}

function removerSeVazio(array) {
  return array.filter((el) => el.trim());
}

// exporta as funções para index.js
module.exports = {
  lerDiretorio,
  elementosTerminadosCom,
  lerArquivo,
  lerArquivos,
  removerSeVazio,
};
