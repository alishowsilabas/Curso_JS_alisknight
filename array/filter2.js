Array.prototype.filter2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 5999, fragil: true},
    {nome: 'Copo de Vidro', preco: 11.90, fragil: true},
    {nome: 'Copo de Alumínio', preco: 29.90, fragil: false}
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter2(caro).filter2(fragil))