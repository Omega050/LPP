class Calculadora {
    constructor(numeros) {
      this.numeros = numeros;
    }

    calcularQuadrado(numero) {
      return numero * numero;
    }
  
    calcularSomaDosQuadrados() {
      const quadrados = this.numeros.map(numero => this.calcularQuadrado(numero));
      return quadrados.reduce((acumulador, quadrado) => acumulador + quadrado, 0);
    }
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const calculadora = new Calculadora(numeros);
  const resultadoOO = calculadora.calcularSomaDosQuadrados();
  console.log(resultadoOO);