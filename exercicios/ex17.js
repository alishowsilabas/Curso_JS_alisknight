const planoSalario = function reajusteSalario(plano, salarioAtual) {
    switch(plano) {
        case 'A':
            return salarioAtual * 1.1
        case 'B':
            return salarioAtual * 1.15
        case 'C':
            return salarioAtual * 1.2
        default:
            return 'Plano inválido!'
    }
}

console.log(planoSalario('A', 3000));
console.log(planoSalario('B', 3000));
console.log(planoSalario('C', 3000));
console.log(planoSalario('D', 3000));