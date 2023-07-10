const cardapio = function(codigo, qnt) {
    switch(codigo) {
        case 100:
            return qnt * 3
        case 200:
            return qnt * 4
        case 300:
            return qnt * 5.5
        case 400:
            return qnt * 7.5
        case 500:
            return qnt * 3.5
        case 600:
            return qnt * 2.8
        default:
            return 'Produto inexistente'
    }
}

console.log(cardapio(100, 2))
console.log(cardapio(200, 2))
console.log(cardapio(300, 2))
console.log(cardapio(400, 2))
console.log(cardapio(500, 2))
console.log(cardapio(600, 2))
console.log(cardapio(0, 0))