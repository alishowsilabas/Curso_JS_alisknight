vetor = [1, 2, 3, 4, 5]

function vetorMultiplica(vetor, multiplicador) {
    vetorResultado1 = []
    vetor.forEach(elemento => {
        vetorResultado1.push(elemento * multiplicador)
    });
    return vetorResultado1
}

function multiplicaSeMaiorQue5 (vetor, multiplicador) {
    vetorResultado2 = []
    if (multiplicador < 5) return
    vetor.forEach(elemento => {
        vetorResultado2.push(elemento * multiplicador)
    })
    return vetorResultado2
}

console.log(vetorMultiplica(vetor, 5))
console.log(vetorMultiplica(vetor, 2))
console.log(multiplicaSeMaiorQue5(vetor, 4))
console.log(multiplicaSeMaiorQue5(vetor, 6))