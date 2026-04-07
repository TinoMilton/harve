
const numeros = [1, 2, 3, 4, 5];

// Estilo declaração da função
const resultadoFunction = numeros.map((value) = function somaMaisUm(value) {
    return value + 1;
})

// Estilo Arrow Function
const resultadoArrowFunction = numeros.map((value) => {
    return value + 1;
})

console.log(resultadoFunction);

console.log(resultadoArrowFunction);
// 2, 3, 4, 5, 6
