function bomDia() {
  console.log("Bom dia!!!!!!");
}

const boaTarde = function () {
  console.log("Boa tarde!!!!!!");
};

// 1) Passar uma função como param pra outra função
function executarQualquerCoisa(fn) {
  if (typeof fn === "function") {
    fn();
  }
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// 2) Retornar uma função a partir de uma outra função

function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}
//  transformando em arrow function
// const potencia = (base) => (exp) => Math.pow(base, exp);
// console.log(potencia(2)(10));

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);

// somar(3)(4)(5)
function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const somarAB = somar(3)(4);
console.log(somarAB(13));
console.log(somar(13)(20)(30));

// fn -> 3 * 7
// fn -> 3 + 7
// fn -> 3 - 7
// calcular(3)(7)(fn)
function calcular(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y);
    };
  };
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

const r1 = calcular(10)(5)(subtrair);
const r2 = calcular(10)(5)(multiplicar);
console.log(r1);
console.log(r2);
