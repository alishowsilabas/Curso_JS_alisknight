// function arrow
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // se verdadeiro 'Aprovado', false 'Reprovado'
console.log(resultado(7))
console.log(resultado(6.9))


// mesmo função só que com corpo
const resultado2 = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}
console.log(resultado2(7))
console.log(resultado(6.9))
