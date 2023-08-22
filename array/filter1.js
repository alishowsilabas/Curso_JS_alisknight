const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 5999, fragil: true},
    {nome: 'Copo de Vidro', preco: 11.90, fragil: true},
    {nome: 'Copo de Alumínio', preco: 29.90, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.preco > 2500 // filtra os produtos de acordo com a especificação requisitada
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))