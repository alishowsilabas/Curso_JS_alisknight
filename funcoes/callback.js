const fabricantes = ["Mercedes", "Audi", "BMW"]

// modo 1
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

// modo 2
fabricantes.forEach(function(fabricante) {
    console.log(fabricante)
})

// modo 3
fabricantes.forEach(fabricante => console.log(fabricante))