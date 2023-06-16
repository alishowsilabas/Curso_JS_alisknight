const notas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// sem callback
let notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7)
    notasBaixas1.push(notas[i])
}

console.log(notasBaixas1)

// com callback
const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// com callback e arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)
console.log(notasBaixas3)