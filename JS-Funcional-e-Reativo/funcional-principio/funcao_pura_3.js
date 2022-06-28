/*
CONCEITO DE FUNÇÃO DE PURA:
- Uma função pura é uma função em que o VALOR de retorno é determinado APENAS 
por seus valores de ENTRADA, sem efeitos colaterais observáveis

*/

let qtdeDeExecucoes = 0;

// pura
function somar(a, b) {
  qtdeDeExecucoes++; // efeito colateral observável, alterando algo externo na função
  return a + b;
}

console.log(qtdeDeExecucoes);
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(somar(68, 31));
console.log(qtdeDeExecucoes);
