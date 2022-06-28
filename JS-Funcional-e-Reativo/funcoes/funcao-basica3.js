// arrow function - função anonima
const myName = () => console.log("Naylson Costa");
myName();

const saudacao = (nome) => `Fala ${nome}, blz?!?`;
console.log(saudacao("Naylson"));

const somar = (...numeros) => {
  let total = 0;
  for (let n of numeros) {
    total += n;
  }
  return total;
};

const subtrair = (a, b) => a - b;

console.log(subtrair(4, 1));

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// this
// acrescentar uma nova função dentro do array
Array.prototype.ultimo = function () {
  // pegar a partir do array o ultimo elemento de this -> numeros = [-333, 1, 2, 3, 500];
  console.log(this[this.length - 1]);
};

Array.prototype.primeiro = function () {
  // pegar a partir do array o primeiro elemento de this -> numeros = [-333, 1, 2, 3, 500];
  console.log(this[0]);
};

const numeros = [-333, 1, 2, 3, 500];
numeros.ultimo();
numeros.primeiro();
