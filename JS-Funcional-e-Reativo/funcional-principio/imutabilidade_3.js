const pessoa = {
  nome: "Naylson",
  altura: 1.8,
  cidade: "rio de janeiro",
  endereco: {
    rua: "teste",
  },
};

//Atribuição por referência
// const novaPessoa = pessoa;
// novaPessoa.nome = "naylson";
// novaPessoa.cidade = "são paulo";
// console.log(novaPessoa);

// Passagem por referência
// function alteraPessoa(novaPessoa) {
//   novaPessoa.nome = "naylsonn";
//   novaPessoa.cidade = "são pauloo";
// }
// alteraPessoa(pessoa);
// console.log(pessoa);

// passagem por referência (função impura!)
function alteraPessoa(pessoa) {
  const novaPessoa = { ...pessoa };
  novaPessoa.nome = "novo nome";
  novaPessoa.cidade = "nova cidade";
  return novaPessoa;
}
const novaPessoa = alteraPessoa(pessoa);
console.log(pessoa);
console.log(novaPessoa);

//Passagem por valor
