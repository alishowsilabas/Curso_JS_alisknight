function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'PC',
    preco: 4000,
    desc: 0.15,
    getPreco
}

// metodo 1
global.preco = 20
global.desc = 0.1

// metodo 2
console.log(getPreco())
console.log(produto.getPreco())

// metodo 3
const carro = {preco: 10000, desc: 0.20}

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// diferença de apply e call é somente a forma como se aplica
console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(carro, [0.17, '$']))