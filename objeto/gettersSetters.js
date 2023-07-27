const sequencia = {
// '_valor' é uma convenção: mostra que essa variável é pretendida ser acessada apenas internamente da const
    _valor: 1,
// getter e setters são funções
    get valor() { return this._valor++ }, 
// forma de validar os dados, a sequência só continuará se o 'valor' for > que a continuação 'this._valor'
    set valor(valor) {
        if(valor > this._valor){
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
// ao tentar colocar um numero menor que a sequencia ele irá ignorar o set e seguira a sequencia
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)