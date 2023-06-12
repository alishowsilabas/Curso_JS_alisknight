// Estratégia 1 para gerar valor padrão OBS: essa forma ainda é muito usada
function soma1(a, b, c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) 
// Valor padrão 3 de acordo com a 'function' acima
// Foi atribuido aqui 3 = a, logo 3 + 1 + 1 = 5
// Atribuido valores a, b, c = 1, 2, 3 >> 1 + 2 + 3 = 6
// Neste caso atribuindo as var valor 0 cria um bug onde acaba definindo cada elemento como 1

// Estratégia 2, 3 e 4
function soma2(a, b, c){
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1 
    c = isNaN(c) ? 1 : c 
    return a + b + c 
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// Valor padrão es2015 MELHOR FORMA
function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))