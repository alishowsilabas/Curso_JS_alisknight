function limitadorDeDigitos(numerosArray, qtdRequiridaDigitos){
    resultado = []

    for(numero of numerosArray){
        const qtdDigitos = String(numero).length

        if(qtdDigitos === qtdRequiridaDigitos)
            resultado.push(numero)
    }
    return resultado
}

meuArray = [10, 200, 3000, 40000, 500000, 60000, 7000, 800, 90, 10]
console.log(limitadorDeDigitos(meuArray, 5))