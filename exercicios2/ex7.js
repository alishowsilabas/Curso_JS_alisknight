function encontrarMenorNumero(numero){
    let menorNumero = numero[0]

    for(let i in numero)
        if(numero[i] < menorNumero)
            menorNumero = numero[i]

    return menorNumero
}

const array = [-300, -19, -18, 1, -301, 0 , -20, 309]
console.log(encontrarMenorNumero(array))