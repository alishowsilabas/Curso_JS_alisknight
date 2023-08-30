function qtdVezesCharRepete(charVerificadoSeRepete, string){
    let contador = 0

    for (let i = 0; i < string.length; i++)
        if (string.charAt(i) === charVerificadoSeRepete)
            contador++

        return `A quantidade de vezes que o Char "${charVerificadoSeRepete}" se repetiu dentro da frase "${string}" foi: ${contador}`
}

console.log(qtdVezesCharRepete('B', 'BBBbanana frita'))

