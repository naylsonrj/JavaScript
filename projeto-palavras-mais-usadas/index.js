const path = require("path");

// função que lê o conteúdo de um arquivo
const fn = require("./funcoes");

// função que seleciona a pasta legendas e retorna o caminho completo
// função path.join() é usada para concatenar caminhos
const caminho = path.join(__dirname, "./", "legendas");
// const arquivos = fn.lerDiretorio(caminho);

const simbolos = [".", "-", "?", '""', "\r", ",", "_", "<i>", "</i>", "[", "]", "♪", "(", ")"];

fn.lerDiretorio(caminho)
  .then(fn.elementosTerminadosCom(".srt"))
  .then(fn.lerArquivos)
  .then(fn.mesclarConteudos)
  .then(fn.separarTextoPor("\n"))
  .then(fn.removerElementosSeVazio) //remove as linhas vazias
  .then(fn.removerElementosseIncluir("-->")) //remove as linhas que começam com "-->"
  .then(fn.removerElementosSeApenasNumeros) //remove as linhas que só contém números
  .then(fn.removerSimbolos(simbolos)) //remove os simbolos
  .then(fn.mesclarConteudos)
  .then(fn.separarTextoPor(" "))
  .then(fn.removerElementosSeVazio)
  .then(fn.agruparElementos)
  .then(console.log);
