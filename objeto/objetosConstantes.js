// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...} neste caso dará problema
// pessoa = {nome: 'Ana'}
// console.log(pessoa)

// congelando a variável
Object.freeze(pessoa)
// os comandos serão ignorados, pois a variável está congelada a partir da linha 11
pessoa.nome = 'Maria'
pessoa.end = 'R. random'
delete pessoa.nome
console.log(pessoa)

// é possível criar um objeto desde o começo com freeze
const pessoaConstante = Object.freeze({nome: 'Random'})
console.log(pessoaConstante)