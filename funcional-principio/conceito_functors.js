// Functors são objetos que implementam a função MAP
// que também é um "wrapper" de um valor

// ARRAY é um exemplo de FUNCTORS
const nums = [1, 2, 3, 4, 5, 6];
// console.log(typeof nums); // retorna um objeto
const novosNums = nums;
nums.map((el) => el + 10).map((el) => el * 2);
console.log(nums, novosNums);

// novo exemplo de functor
function tipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return tipoSeguro(null);
      } else {
        const novoValor = fn(this.valor);
        return tipoSeguro(novoValor);
      }
    },
  };
}

const original = "texto original";
const alterado = tipoSeguro(original)
  .map((t) => t.toUpperCase())
  .map((t) => `${t} !!!`)
  .map((t) => t.split("").join("  "));
console.log(original, alterado.valor);
