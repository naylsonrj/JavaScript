const { Observable, Subscriber } = require("rxjs");

const obs = new Observable((subscriber) => {
  subscriber.next("RxJS");
  subscriber.next("é");
  subscriber.next("Top");

  if (Math.random() > 0.5) {
    subscriber.complete();
  } else {
    subscriber.error("Que problema?");
  }
});

// subscribe pode receber 3 funções
obs.subscribe({
  next: (v) => console.log(`Valor: ${v}`),
  error: (e) => console.error(`Erro: ${e}`), // senão quiser mostrar erro usar 'noop'
  complete: () => console.info("Fim!!"),
});
