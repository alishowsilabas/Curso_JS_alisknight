function entreNumeros(numero, minimo, maximo, inclusivo = false){
    if(inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}

console.log(entreNumeros(0, 1, 20))
console.log(entreNumeros(10, 1, 20))
console.log(entreNumeros(1, 1, 1))
console.log(entreNumeros(1, 1, 1, 10))