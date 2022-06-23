// criar uma stream de numero
// entre min e max com Observables
const { Observable, Subscriber, noop } = require("rxjs");

// function entre(min, max) {
//   return new Observable((Subscriber) => {
//     for (let i = min; i <= max; i++) {
//       Subscriber.next(i);
//     }
//     Subscriber.complete();
//   });
// }

// entre(4, 10).subscribe((num) => console.log(`num = ${num}`)), noop, () => console.log("fim!");

// Outra maneira de fazer usando array
function entre(min, max) {
  return new Observable((Subscriber) => {
    Array(max - min)
      .fill()
      // não interessa o parametro gerado '_' e sim o indice 'i'
      .map((_, i) => {
        Subscriber.next(i);
      });
    Subscriber.complete();
  });
}
entre(4, 10).subscribe((num) => console.log(`num = ${num}`)), noop, () => console.log("fim!");
