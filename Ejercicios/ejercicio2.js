const readline = require('readline');


const numeroPrimo = (numero) => {
    if (numero < 2) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
};

const consola = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

consola.question('Ingresa un número entero positivo: ', (entrada) => {
    const numero = parseInt(entrada);
    console.log(
        Number.isInteger(numero) && numero > 0
            ? `El número ${numero} ${numeroPrimo(numero) ? 'es primo.' : 'no es primo.'}`
            : 'Por favor, ingresa un número entero positivo válido.'
    );
    consola.close();
});
