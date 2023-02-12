function compareNumbers(a, b) {
    if (a > b) {
        return "El primer número es mayor que el segundo.";
    } else if (a < b) {
        return "El primer número es menor que el segundo.";
    } else if (a === b) {
        return "Los números son iguales.";
    } else {
        return "Los números son diferentes.";
    }
}

// Para llamar a la función y ver su resultado
console.log(compareNumbers(5, 10));
// El primer número es menor que el segundo.
