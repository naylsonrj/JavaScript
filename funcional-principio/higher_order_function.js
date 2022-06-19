/*
Funções que operam em outras funções,
tomando-as como argumentos ou retornando-as,
são chamadas de HIGHER-ORDER FUNCTIONS

*/

function executar(fn, ...params) {
  return function (textoInicial) {
    return `${textoInicial} ${fn(...params)}!`;
  };
}

function somar(a, b, c) {
  return a + b + c;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = executar(somar, 1, 2, 3)("O resultado da soma é:");
const r2 = executar(multiplicar, 2, 5)("O resultado da multiplicação é:");
console.log(r1);
console.log(r2);

// Consigo passar uma função como parametro para outra função sendo uma higher-order
