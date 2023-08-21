const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

// sem mostar o indice, somento os elementos
aprovados.forEach(nome => console.log(nome))

// deixando o codigo mais consistente
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)