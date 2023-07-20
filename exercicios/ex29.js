function identificandoIntervalo(vetorNumeros){
    qtdNumerosIntervalo = 0
    for (i = 0; i < vetor.length; i ++){
        if (vetor[i] >= 10 && vetor[i] <= 20){
            qtdNumerosIntervalo++
        } 
    }
    return `Quantidade de números no intervalo: ${qtdNumerosIntervalo}`
}

vetor = [9, 10, 11, 13, 16, 18, 20, 21]
console.log(identificandoIntervalo(vetor))