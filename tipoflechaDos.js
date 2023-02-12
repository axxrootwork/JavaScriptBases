const compareNumbers = (a, b) => {
    return a > b
        ? "El primer número es mayor que el segundo."
        : a < b
        ? "El primer número es menor que el segundo."
        : a === b
        ? "Los números son iguales."
        : "Los números son diferentes.";
};

// Para llamar a la función y ver su resultado
console.log(compareNumbers(5, 10));
// El primer número es menor que el segundo.