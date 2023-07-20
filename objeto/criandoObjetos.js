// Formas de criar Objetos

// Notação Literal
const obj1 = {
}
console.log(obj1)

// Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funções Construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    // Não é possivel mudar o valor do preco e desconto pois estão escondidos apenenas dentro da Function
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 8.00, 0.15)
const p2 = new Produto('Caderno', 20.00, 0.10)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}
const f1 = criarFuncionario('João', 7900, 4)
const f2 = criarFuncionario('Maria', 10900, 1)
console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Object
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)