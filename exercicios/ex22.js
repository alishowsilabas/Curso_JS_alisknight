function calculoAnuidade(mes, valor){
    if(mes > 0 && mes < 13){
        atraso = mes - 1
        return (valor * ((1 + 5/100) ** atraso)).toFixed(2)
    } else {
        return `Mês inválido!
        Por favor, inserir um número de 1 até 12
        onde 1 é Janeiro e 12 é Dezembro`
    }
}

console.log(calculoAnuidade(1, 100));
console.log(calculoAnuidade(2, 100));
console.log(calculoAnuidade(3, 100));
console.log(calculoAnuidade(4, 100));
console.log(calculoAnuidade(5, 100));
console.log(calculoAnuidade(6, 100));