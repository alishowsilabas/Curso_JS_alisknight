// coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
// É possível excluir atributos de um Objeto com o comando 'delete'
delete produto.preco
delete produto['Marca do Produto']
console.log(produto)

// Exemplo de Obj mais complexo 
const carro = {
    TipoProduto: 'Carro',
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Márcia',
        idade: 30,
        endereco: {
            lagradouro: 'R. aleatória',
            numero: 30
        }
    },
    condutores: [{
        nome: 'Marcos',
        idade: 20
    }, {
        nome: 'Jorge',
        idade: 25
    }],
    calcularSeguro: function() {
        // ...
    }
}

// Métodos de acessar os dados
carro.proprietario.endereco.numero = 300
carro['proprietario']['endereco']['lagradouro'] = 'R. não aleatória'
console.log(carro)

// Deletando dados e funções
delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularSeguro
console.log(carro)
console.log(carro.condutores) // não dá erro, pois 'carro' existe, e condutores é apenas 'undefined'