const soma = function(x, y) {
    return x + y
}

const imprimirResultado = function(a , b, operacao = soma) {
    console.log(operacao(a, b))
}

// exemplos
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function(x, y) {
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // arrow functions sempre serão anônimas

// função anônimas dentro de um contexto de um objeto
const pessoa = {
    falar: function(){
        console.log('Opa')
    }
}

pessoa.falar()