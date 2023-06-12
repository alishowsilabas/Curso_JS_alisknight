function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`)
    }
    else {
        return area
    }
}

console.log(area(2, 2))
console.log(area(2)) // Not A Number pois faltou passar o segundo parâmetro de 'area'
console.log(area()) // NaN pois faltaram os dois parâmetros
console.log(area(2, 4, 5, 6, 7, 8, 9, 22, 55))
console.log(area(5, 5))