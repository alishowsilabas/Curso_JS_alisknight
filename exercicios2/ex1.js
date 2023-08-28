function retornarPares(numeros){
    const resultado = []

    for(let i = 0; i < numeros.length; i += 2){
    const numeroEhPar = numeros[i] % 2 === 0

    if(numeroEhPar)
    resultado.push(numeros[i])
    }
    return resultado
}

const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(retornarPares(array))