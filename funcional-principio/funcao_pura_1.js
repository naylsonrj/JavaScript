/*
CONCEITO DE FUNÇÃO DE PURA:
- Uma função pura é uma função em que o VALOR de retorno é determinado APENAS 
por seus valores de ENTRADA, sem efeitos colaterais observáveis

*/

// Função IMPURA -> Porque a função depende de PI que é um valor externo
const PI = 3.14;

function areaCircuferencia(raio) {
  return raio * raio * PI;
}

// Transformando em um função PURA
function areaCircuferenciaPura(raio, pi) {
  return raio * raio * pi;
}

console.log(areaCircuferencia(10));
console.log(areaCircuferenciaPura(10, Math.PI));
