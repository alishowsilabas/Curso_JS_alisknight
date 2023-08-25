function multiplicador(numero1, numero2){
    let resultado = 0
    for(let i = 0; i < numero2; i ++)
    resultado += numero1

    return resultado
}

console.log(multiplicador(10, 5))