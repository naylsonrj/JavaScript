function textoComTamanhoEntre(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // lazy evaluation (essa função só sera executada quando receber todos os parametros)
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

// currying consegue criar versões parciais das funções para reutilizar da melhor maneira
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido!");

const p1 = {
  nome: "A",
  preco: 14.99,
  desconto: 0.25,
};

// textoComTamanhoEntre(4, 255, "Nome inválido!", p1.nome); modelo antigo
// textoComTamanhoEntre(4)(255)("Nome inválido!")(p1.nome); modelo aprimorado

//versão final
forcarNomeProdutoValido(p1.nome);
