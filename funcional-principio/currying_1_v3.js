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

function aplicarValidacao(fn) {
  return function (valor) {
    // lazy evaluation
    try {
      fn(valor);
    } catch (e) {
      return { erro: e };
    }
  };
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255);
const forcarNomeProdutoValido = forcarTamanhoPadrao("Nome produto inválido!");
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido);

const p1 = { nome: "A", preco: 14.99, desconto: 0.25 };
const p2 = { nome: "B", preco: 14.99, desconto: 0.25 };

// Currying -> uma maneira de transformar uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada com um parâmetro apenas.”
//versão final
console.log(validarNomeProduto(p1.nome));
console.log(validarNomeProduto(p2.nome));
