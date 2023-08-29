function mediaDosNumeros(numeros){
    const qtdNumeros = numeros.length
    let somaTotal = 0

    for(let numero of numeros){
        somaTotal += numero
    }

    return somaTotal / qtdNumeros
}

const meuArrayDeNumeros = [10, 19, 20, 39, 80, 100]
console.log(mediaDosNumeros(meuArrayDeNumeros))