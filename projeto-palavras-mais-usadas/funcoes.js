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

module.exports = { lerDiretorio }; // exporta a função lerDiretorio para index.js
