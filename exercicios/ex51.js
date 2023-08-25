function primeiroEultimo(elementos){
    const primeiroElementoIndice = elementos[0]
    const ultimoElementoIndice = elementos[elementos.length -1]

    return [primeiroElementoIndice, ultimoElementoIndice]
}

const elementos = [1, 1]

console.log(primeiroEultimo(elementos))


