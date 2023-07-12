function calculoConvenio(idade) {
    if (idade < 10) {
        return 'Valor do Convênio: R$180,00'
    } else if (idade <= 30) {
        return 'Valor do Convênio: R$150,00'
    } else if (idade <= 60) {
        return 'Valor do Convênio: R$195,00'
    } else {
        return 'Valor do Convênio: R$230,00'
    }
}

console.log(calculoConvenio(9));
console.log(calculoConvenio(10));
console.log(calculoConvenio(30));
console.log(calculoConvenio(31));
console.log(calculoConvenio(60));
console.log(calculoConvenio(61));
