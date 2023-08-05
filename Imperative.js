function calcularSomaDosQuadrados(arr) {
  let soma = 0;
  for (let i = 0; i < arr.length; i++) {
    soma += arr[i] * arr[i];
  }
  return soma;
}

const numeros = [1, 2, 3, 4, 5];
const resultadoImperativo = calcularSomaDosQuadrados(numeros);
console.log(resultadoImperativo);