const readline = require('readline');

function calcularFactorial(numero) {
    if (!Number.isInteger(numero) || numero < 0) {
        throw new Error('El número debe ser un entero no negativo.');
    }

    // caso base
    if (numero === 0) {
        return 1;
    }

    // llamada recursiva
    return numero * calcularFactorial(numero - 1);
}


const consola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


consola.question('Ingresa un número entero no negativo: ', (entrada) => {
    try {
        const numero = parseInt(entrada);
        const resultado = calcularFactorial(numero);
        console.log(`El factorial de ${numero} es: ${resultado}`);
    } catch (error) {
        console.error(error.message);
    } finally {
        consola.close();
    }
});
