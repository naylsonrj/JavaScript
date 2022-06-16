const path = require("path");

// função que lê o conteúdo de um arquivo
const fn = require("./funcoes");

// função que seleciona a pasta legendas e retorna o caminho completo
// função path.join() é usada para concatenar caminhos
const caminho = path.join(__dirname, "./", "legendas");
// const arquivos = fn.lerDiretorio(caminho);
fn.lerDiretorio(caminho)
  .then((arquivos) => fn.elementosTerminadosCom(arquivos, ".srt"))
  .then(console.log); // somentes arquivos com extensão .srt
