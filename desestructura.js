const arr = ["Hola Emtech", 12, [true, false]];

// Desestructuración de tres valores
const [stringValor, firstNumero, [firstArrayValor, secondArrayValor]] = arr;

// Imprimir los valores desestructurados
console.log(stringValor);
// Hola Emtech
console.log(firstNumero);
// 12
console.log(firstArrayValor);
// true