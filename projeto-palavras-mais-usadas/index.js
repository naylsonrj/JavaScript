const path = require("path");

// função que lê o conteúdo de um arquivo
const fn = require("./funcoes");

// função que seleciona a pasta legendas e retorna o caminho completo
// função path.join() é usada para concatenar caminhos
const caminho = path.join(__dirname, "./", "legendas");

// fn.lerDiretorio(caminho);
const arquivos = fn.lerDiretorio(caminho);
console.log(arquivos); // retorna o caminho completo dos arquivos na pasta legendas
