function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor  = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Valores random entre 50 - 40
console.log(rand([992])) // Valores random entre 992 - 1000
console.log(rand([, 40])) // Valores random entre 0 - 40
console.log(rand([])) // Valores random padrões entre 0 - 1000