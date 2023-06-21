function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar() // uma vez = 5
uno.acelerar() // segunda vez = 10
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar() // uma vez = 20
ferrari.acelerar() // segunda vez = 40
ferrari.acelerar() // terceira vez = 60
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) // function   
console.log(typeof ferrari) // object