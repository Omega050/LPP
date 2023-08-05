function divide(a, b) {
    if (b === 0) {
        throw new Error("Divisão por zero não é permitida.");
    }
    return a / b;
}

try {
    const resultado = divide(10, 2);
    console.log("Resultado:", resultado);

    const resultadoZero = divide(5, 0);
    console.log("Resultado:", resultadoZero);
} catch (error) {
    console.error("Erro:", error.message);
} finally {
    console.log("Finalizando o bloco try-catch.");
}

console.log("Continuando o fluxo de execução.");