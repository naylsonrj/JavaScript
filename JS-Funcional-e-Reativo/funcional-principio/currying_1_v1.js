function soma(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
console.log(soma(1)(2)(3));

function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || "").trim().lenght; //trim tira os espaços em branco
  if (tamanho < min || tamanho > max) {
    throw erro;
  }
}

const p1 = {
  nome: "A",
  preco: 14.99,
  desconto: 0.25,
};
textoComTamanhoEntre(4, 255, "Nome inválido!", p1.nome);
