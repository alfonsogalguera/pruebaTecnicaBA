const aleatorio = () => Math.floor(Math.random() * 1001);

const primo = (num) => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};


const numeros = Array.from({ length: 100 }, aleatorio).sort((a, b) => b - a);


const mapNumeros = new Map(numeros.map(n => [n, primo(n) ? 'es primo' : 'no es primo']));


mapNumeros.forEach((valor, clave) => console.log(`Número: ${clave}, ${valor}`));
