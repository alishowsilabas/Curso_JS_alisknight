const notas = [1.1, 2.2 ,3.3 ,4.4 ,5.5 ,6.6 ,7.7]

for (let i in notas) {
    console.log(i, notas[i]) // exemplo não muito usado
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`) // exemplo mais usado
}
