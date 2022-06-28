const { from, Observable } = require("rxjs");

// desafio criando uma função que facilita a utlização de novos operadores,
// usando exemplo de operadores_4.js

function createPipeableOperator(nextGenerator) {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          next: nextGenerator(subscriber);
        },
      });
    });
  };
}

// primeira maneira de fazer
// function createPipeableOperator(nextFn) {
//   return function (source) {
//     return Observable.create((subscriber) => {
//       source.subscribe({
//         next(v) {
//           nextFn(subscriber, v);
//         },
//       });
//     });
//   };
// }

function primeiro() {
  return createPipeableOperator(function (subscriber) {
    return function (valor) {
      subscriber.next(v);
      subscriber.complete();
    };
  });

  // ==== primeira maneira ====
  // function primeiro() {
  //   return createPipeableOperator((subscriber, v) => {
  //     subscriber.next(v);
  //     subscriber.complete();
  //   });
}

function nenhum() {
  return function (source) {
    return Observable.create((subscriber) => {
      source.subscribe({
        next(v) {
          subscriber.complete();
        },
      });
    });
  };
}

function ultimo() {
  return function (source) {
    return Observable.create((subscriber) => {
      let ultimo;
      source.subscribe({
        next(v) {
          ultimo = v;
        },
        complete() {
          if (ultimo !== undefined) {
            subscriber.next(ultimo);
          }
          subscriber.complete();
        },
      });
    });
  };
}

from([1, 2, 3, 4, 5])
  .pipe(
    primeiro()
    // nenhum(),
    // ultimo()
  )
  .subscribe(console.log);
