const pessoa = {
    nome: 'Rebeca',
    idade: 22,
    peso: 13
}

console.log(Object.keys(pessoa)) // mostra as chaves do objeto
console.log(Object.values(pessoa)) // mostra valores das chaves
console.log(Object.entries(pessoa)) // mostra as chaves e seus valores

// desestruturando o Object, pegando elemento por elemento através do 'forEach'
Object.entries(pessoa).forEach(([chave, valor]) => { 
    console.log(`${chave}: ${valor}`)
})

// alterando dado por dado, sem mexer no Obeject inteiro pra isso
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2023'
})

pessoa.dataNascimento = '01/01/2022' // não altera pois 'settamos' o valor em 'defineProperty'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMScript 2015)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(dest, o1, o2) // depois do 1º objeto ele concatena e sobrescreve, o ultimo valor é o que fica
console.log(obj)

Object.freeze(obj)
obj.c = 123
console.log(obj)
