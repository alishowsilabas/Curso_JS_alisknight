console.log(soma(4, 3)) // acesso "antes" do início da function
console.log(sub(4, 3)) // erro - acesso somente apos inicio da function
console.log(mult(4, 3)) // erro - acesso somente apos inicio da function

// function declaration => uma das formas mais comuns de uso
function soma(x, y) {
    return x + y
}

// function expression => uma das formas mais comuns de uso
const  sub = function(x, y) {
    return x - y
}

// named function expression => vantagem quando for debugar o codigo
const mult = function mult(x, y) { 
    return x * y
}