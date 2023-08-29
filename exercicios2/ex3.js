function SomaNumerosDoArray(numeros){
    let soma = 0
    numeros.forEach(numero => soma += numero)

    return soma
}

const array = [1, 1, 1, 7]
console.log(SomaNumerosDoArray(array))