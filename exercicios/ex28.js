function imparesPares(vetorNumeros) {
    let impar = 0
    let par = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0){
            impar++
        } else  {
            par++
        }
    }

console.log(`${par} São pares e ${impar} são ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
imparesPares(vetor)