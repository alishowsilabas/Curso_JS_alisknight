const pai = {nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Maria'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: {value: 'Joana', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla' // o nome não muda pois 'settamos' para não ser reescrevivel
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`) // cor do cabelo é herdada do pai

console.log(Object.keys(filha1))
console.log(Object.keys(filha2)) // 'filha2.nome' não é mostrada se colocarmos 'numerable: false'


// aqui mostra que 'filha2' tem como propriedade própria 'nome', e 'corCabelo' herdado
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}