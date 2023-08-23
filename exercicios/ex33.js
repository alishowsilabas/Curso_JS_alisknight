let vetorInteiro = [1, 2, 3, 4, 5]
let vetorString = ['um', 'dois', 'três', 'quarto', 'cinco']
let vetorDouble = [6.6, 7.7, 8.8, 9.9]

function concatenar (...args) {
    resultado = []
    for (i = 0; i < arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado
}

console.log(concatenar(vetorInteiro, vetorDouble))
console.log(concatenar(vetorDouble, vetorString))