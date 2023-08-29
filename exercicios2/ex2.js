function anoBissexto(ano){
    const divisaoPorQuatro = ano % 4 == 0
    const divisaoPorCem = ano % 100 == 0
    const divisaoPorQuatrocentos = ano % 400 == 0

    return (divisaoPorQuatro && !divisaoPorCem) || divisaoPorQuatrocentos
}

console.log(anoBissexto(2024))
console.log(anoBissexto(2023))
console.log(anoBissexto(0))