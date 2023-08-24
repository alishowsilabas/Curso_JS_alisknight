function trocaVetores (vetorA, vetorB) {
    if (vetorA.length == vetorB.length){
        for (let i = 0; i < vetorA.length; i++){
            vertorA[i] = vetorA[i] + vertorB[i]
            vertorB[i] = vetorA[i] - vertorB[i]
            vertorA[i] = vetorA[i] - vertorB[i]
        }
    } else {
        return 'Vetores tem tamanhos diferentes.'
    }
    console.log('Novo vetor A: ' + vetorA)
    console.log('Novo vetor B: ' + vetorB)
}

let vertorA = [1, 2, 3, 4]
let vertorB = [5, 6, 7, 8]

trocaVetores(vertorA, vertorB)

