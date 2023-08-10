// Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B', attr3: 'X'} // o 'attr3:X' foi sombreado
const filho = {__proto__:pai, attr3:'C'}
console.log(filho.attr1, filho.attr2, filho.attr3, filho.attr0, filho.attrA)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual +=delta
        } else {
            this.velAtual = this.velMax
            }
        },
        status() {
            return`${this.velAtual}km/h de ${this.velMax}km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing/sombreamento
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}:${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // estabelecimento de relação entre 'ferrari' e 'carro'
Object.setPrototypeOf(volvo, carro) // estabelecimento de relação entre 'volvo' e 'carro'

console.log(ferrari) // retorna os valores 'settados' dentro do objeto
console.log(volvo) // retorna os valores 'settados' dentro do objeto

volvo.acelerarMais(300)
console.log(volvo.status())

ferrari.acelerarMais(324)
console.log(ferrari.status())