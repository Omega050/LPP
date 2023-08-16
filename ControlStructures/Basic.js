//Instruções de Seleção:

if (condition) {
    // Executa se a condição for verdadeira
  } else {
    // Executa se a condição for falsa
  }

//Loops Controlados por Contadores:

for (let i = 0; i < 10; i++) {
    // Executa enquanto i for menor que 10
}

//Loops Controlados Logicamente:

while (condition) {
    // Executa enquanto a condição for verdadeira
  }

//Controle Definido pelo Usuário:

  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break; // Sai do loop quando i for igual a 5
    }
    // Código aqui será executado
  }


  
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue; // Pula a iteração quando i for igual a 5
    }
    // Código aqui será executado, exceto quando i for 5
  }