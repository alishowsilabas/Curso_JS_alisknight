function contadorDePalavras(fraseString){
    let palavras = fraseString.split(" ")

    return palavras.length
}

console.log(contadorDePalavras("Quantas palavras tem dentro desta String?"))