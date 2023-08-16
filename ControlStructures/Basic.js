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

//Switch

  const dayOfWeek = 3; // 1 = Domingo, 2 = Segunda, 3 = Terça, ...

switch (dayOfWeek) {
  case 1:
    console.log("Hoje é domingo");
    break;
  case 2:
    console.log("Hoje é segunda-feira");
    break;
  case 3:
    console.log("Hoje é terça-feira");
    break;
  case 4:
    console.log("Hoje é quarta-feira");
    break;
  case 5:
    console.log("Hoje é quinta-feira");
    break;
  case 6:
    console.log("Hoje é sexta-feira");
    break;
  case 7:
    console.log("Hoje é sábado");
    break;
  default:
    console.log("Dia inválido");
    break;
}