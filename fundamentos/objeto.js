console.log(typeof Object)
console.log(typeof new Object()) // Uma função pode ser estanciada utilizando o 'new'

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente()) // É possível criar instancias de funções que eu mesmo defini

class Produto {} // ES6
console.log(typeof Produto) // Classes são funções
console.log(typeof new Produto()) /* Aqui ela se torna um objeto, ou seja, é possível instanciar a partir de
                                   uma classe */