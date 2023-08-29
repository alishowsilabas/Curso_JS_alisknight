function gastosTotais(gasto){
    var total = 0

    for(let item of gasto)
        total += item.preco

    return total
}

const despesas = [
    {nome: 'Alisson', preco: 100,  produto: 'Teclado'},
    {nome: 'Carol', preco: 100, produto: 'Maquiagem'},
    {nome: 'Carol', preco: 4000, produto: 'Notebook'},
    {nome: 'Alisson', preco: 4000, produto: 'PC'}
]

console.log(gastosTotais(despesas))