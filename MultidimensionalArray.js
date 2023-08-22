// Criando uma matriz multidimensional
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  // Acessando elementos da matriz multidimensional
  console.log(matrix[0][0]); // Saída: 1
  console.log(matrix[1][2]); // Saída: 6
  
  // Modificando elementos da matriz multidimensional
  matrix[1][1] = 10;
  console.log(matrix); // Saída: [[1, 2, 3], [4, 10, 6], [7, 8, 9]]
  
  // Tamanho da matriz multidimensional
  console.log(matrix.length); // Saída: 3 (número de linhas)
  
  // Iterando sobre a matriz multidimensional usando loops aninhados
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      console.log(matrix[i][j]);
    }
  }