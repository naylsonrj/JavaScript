/////// exemplo 1
function gerarNumeros() {
  let num = 0;
  setInterval(() => {
    console.log(num++);
  }, 1000);
}
gerarNumeros(); // gerar numeros a cada 1 segundo

////////// exemplo 2
function gerarNumeros(fn) {
  let num = 0;
  setInterval(() => {
    fn(num++);
  }, 1000);
}

gerarNumeros((num) => {
  console.log(`#1 ${num * 2}`);
});
gerarNumeros((a) => {
  console.log(`#2 ${a + 100}`);
});

//////////////// exemplo 3
function gerarNumeros(fn) {
  return {
    iniciar(fn, intervalo = 1000) {
      let num = 0;
      setInterval(() => {
        fn(num++);
      }, intervalo);
    },
  };
}

const tempo1 = gerarNumeros();
tempo1.iniciar((numero) => {
  console.log(`#1 => ${numero * 2}`);
}, 1000);

const tempo2 = gerarNumeros();
tempo2.iniciar((a) => {
  console.log(`#2 =>  ${a + 100}`);
}, 2000);

////////// exemplo 4
function gerarNumeros() {
  return {
    iniciar(fn, intervalo = 1000) {
      let num = 0;
      const i = setInterval(() => {
        fn(num++);
      }, intervalo);
      return {
        parar() {
          clearInterval(i);
        },
      };
    },
  };
}

const temp1 = gerarNumeros();
const exec11 = temp1.iniciar((numero) => {
  console.log(`#1.1: ${numero * 2}`);
}, 1000);

const exec12 = temp1.iniciar((numero) => {
  console.log(`#1.2: ${numero * 2}`);
}, 500);

const temp2 = gerarNumeros();
const exec2 = temp2.iniciar((a) => {
  console.log(`#2: ${a + 100}`);
}, 2000);

setTimeout(() => {
  exec11.parar();
  exec2.parar();
}, 10000);

setTimeout(() => {
  exec12.parar();
}, 12000);
