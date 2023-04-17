console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
// obj1['nome'] = 'Bola2' também funciona porém não é a melhor forma
console.log(obj1.nome)

function Obj(nome) {
    this.nome = nome 
    this.exec = function() {
        console.log('Exec...')
    }
}
// this. torna o atributo público

const Obj2 = new Obj('Cadeira')
const Obj3 = new Obj('Cama')
console.log(Obj2.nome)
console.log(Obj3.nome)
Obj3.exec()