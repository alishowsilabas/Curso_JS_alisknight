function qtdVezesCharRepete(caractereRepetido, string){
    let contador = 0

    for (let i = 0; i < string.length; i++)
        if (string.charAt(i) === caractereRepetido)
            contador++

        return `A quantidade de vezes que o Char se repetiu dentro da frase foi: ${contador}`
}

console.log(qtdVezesCharRepete('B', 'BBBBBBbanana'))

