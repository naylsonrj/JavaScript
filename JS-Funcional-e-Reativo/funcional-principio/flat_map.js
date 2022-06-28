const letrasAlinhadas = [["N", ["A", "Y"], "L", ["S", "O"], "N"], ["2022"], ["!"]];

const letras = letrasAlinhadas.flat(Infinity); // junta todos os arrays em um 1 só
// console.log(letras);
// console.log(letras.flat()); // junta em uma única matriz

const resultado = letras.flatMap((l) => [l, ", "]).reduce((a, b) => a + b);
console.log(resultado);
