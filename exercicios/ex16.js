function calculadora (valor1, operacao, valor2) {
    switch (operacao) {
        case '+':
            return valor1 + valor2
        case '-':
            return valor1 - valor2
        case '*':
            return valor1 * valor2
        case '/':
            return valor1 / valor2
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(1, '+', 3));
console.log(calculadora(1, '-', 3));
console.log(calculadora(1, '*', 3));
console.log(calculadora(1, '/', 3));
console.log(calculadora(1, 'a', 3));