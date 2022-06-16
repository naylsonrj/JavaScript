const fs = require("fs"); // função que lê o conteúdo de um arquivo
const path = require("path");

function lerDiretorio(caminho) {
  let arquivos = fs.readdirSync(caminho); // lê o conteúdo do diretório
  // resposta é um array com os nomes dos arquivos
  // console.log(arquivos);
  return arquivos.map((arquivo) => path.join(caminho, arquivo)); // retorna o caminho completo
}

module.exports = { lerDiretorio }; // exporta a função lerDiretorio para index.js
