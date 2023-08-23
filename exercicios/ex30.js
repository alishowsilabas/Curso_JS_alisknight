function maiorMenorNumero(vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            } 
            if (vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor =  [100, 5, 7, 3, 2, 33, 11, 20, 6, 9]

console.log(maiorMenorNumero(vetor))