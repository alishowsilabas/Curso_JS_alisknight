// Class
class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const p1 = new Pessoa('Alisson')
const p2 = new Pessoa('Carolina')
p1.falar()
p2.falar()

// Factory
const criarPessoa = nome => {
    return { 
        falar: () => console.log(`Meu nome é: ${nome}`)
    }
}

const p3 = criarPessoa('Carolisson')
p3.falar()
