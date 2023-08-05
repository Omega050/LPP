function calcularQuadrado(numero) {
    return numero * numero;
  }
  
  function calcularSoma(arr) {
    return arr.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const quadrados = numeros.map(calcularQuadrado);
  const resultadoFuncional = calcularSoma(quadrados);
  console.log(resultadoFuncional);