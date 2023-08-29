const despesas = [
        {nome: 'Alisson', valor: 100,  produto: 'Teclado'},
        {nome: 'Carol', valor: 100, produto: 'Maquiagem'},
        {nome: 'Carol', valor: 4000, produto: 'Notebook'},
        {nome: 'Alisson', valor: 4000, produto: 'PC'}
    ]

    console.log(despesas.map(a => a.valor))

    const valorTotalDespesas = despesas.map(a => a.valor).reduce(function(acumulador, atual){
        console.log(acumulador, atual)
        return acumulador + atual
    }, 0)


console.log(valorTotalDespesas)