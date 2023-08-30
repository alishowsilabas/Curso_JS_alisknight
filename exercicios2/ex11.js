function searchTrecho(trecho, palavras){
    const resultado = []

    for(let palavra of palavras)
        if(palavra.toLowerCase().includes(trecho))
            resultado.push(palavra)

    return resultado
}

const arrayPalavras = ['Sandwich', 'Sand', 'sanduba', 'Sandália', 'Sonda']

console.log(searchTrecho('sand', arrayPalavras))