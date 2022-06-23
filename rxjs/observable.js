const { Observable, Subscriber } = require("rxjs");

const promise = new Promise((resolve, reject) => {
  resolve("Exemplo de PROMISE");
  resolve("Exemplo de PROMISE 2"); // promisse só permite chamar 1 vez
});

promise.then(console.log);

// resumindo a diferença de promise para observer
// promisse só consegue chamar 1 vez o RESOLVE e REJECT
// Observable consegue criar um stream de dados

/// observable
// reusa o mesmo observer gerando + de 1 dado
const obs = new Observable((subscriber) => {
  subscriber.next("Exemplo de Observer!");
  subscriber.next("Exemplo de Observer! 2");
  subscriber.next("Exemplo de Observer! 3");
  setTimeout(() => {
    subscriber.next("Exemplo de Observer! 4");
    subscriber.complete(); // finaliza o o subscribe
  }, 2000);
});
obs.subscribe(console.log);
obs.subscribe((texto) => console.log(texto.toUpperCase()));
