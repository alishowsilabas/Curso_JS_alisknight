function criarProduto(nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1 // desta forma o valor é padrão 10%
    }
}

console.log(criarProduto('Notebook', 1900.00))
console.log(criarProduto('PC gamer', 4999.99))
console.log(criarProduto('PC HP', 999.99))