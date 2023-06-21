function Pessoa(nome) {
    this.nome = nome

    this.falar =function() {
        console.log(`Meu nome é: ${this.nome}`)
    }
}

const p1 = new Pessoa('Alisson')
const p2 = new Pessoa('Carolina')
p1.falar()
p2.falar()