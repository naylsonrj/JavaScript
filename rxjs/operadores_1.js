// Os dois tipos de operadores
// 1. Operadores de Criação
const { of } = require("rxjs");

// 2. Operadores Encadeáveis(Pipeables Op.)
const { last, first, map } = require("rxjs/operators");

// of(1, 2, "naylson", false, "ultimo")
//   // .pipe(first()) // vai mostrar o primeiro dado
//   .pipe(last()) // vai mostrar o ultimo dado
//   .pipe(map((v) => v[0])) // vai mostrar a primeira letra
//   .subscribe(function (valor) {
//     console.log(`O valor gerador foi: ${valor}`);
//   });

// segunda maneira escrever operadores
// from([1, 2, "naylson", false, "ultimo"]) // poderia ser usando o metodo array
of(1, 2, "naylson", false, "ultimo")
  .pipe(
    last(),
    map((v) => v[0]),
    map((v) => `A letra encontrada foi ${v}`)
  )
  .subscribe(function (valor) {
    console.log(valor);
  });
