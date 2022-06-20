const path = require("path");

// função que lê o conteúdo de um arquivo
const fn = require("./funcoes");

// função que seleciona a pasta legendas e retorna o caminho completo
// função path.join() é usada para concatenar caminhos
const caminho = path.join(__dirname, "./", "legendas");
// const arquivos = fn.lerDiretorio(caminho);

const simbolos = [".", "-", "?", '""', "\r", ",", "_", "<i>", "</i>", "[", "]", "♪", "(", ")"];

const palavrasMaiUsadas = fn.composicao(
  fn.lerDiretorio,
  fn.elementosTerminadosCom(".srt"),
  fn.lerArquivos,
  fn.mesclarConteudos,
  fn.separarTextoPor("\n"),
  fn.removerElementosSeVazio,
  fn.removerElementosseIncluir("-->"),
  fn.removerElementosSeApenasNumeros,
  fn.removerSimbolos(simbolos),
  fn.mesclarConteudos,
  fn.separarTextoPor(" "),
  fn.removerElementosSeVazio,
  fn.agruparElementos,
  fn.ordernarPorAtributoNumerico("qtde", "desc")
);

palavrasMaiUsadas(caminho).then(console.log);
