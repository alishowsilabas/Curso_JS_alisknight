function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}

console.log(calcularPreco(9));
console.log(calcularPreco(10));
console.log(calcularPreco(30));
console.log(calcularPreco(31));
console.log(calcularPreco(60));
console.log(calcularPreco(61));