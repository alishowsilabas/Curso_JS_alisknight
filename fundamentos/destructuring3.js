function rand ({ min = 0, max = 1000 }) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = {max: 50, min: 40}
console.log(rand(obj)) // Número random entre 40 - 50
console.log(rand({min: 955})) // Número random entre 955 - 1000
console.log(rand({})) // Número random entre 0 - 1000 