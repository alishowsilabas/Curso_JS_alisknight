function salarioFuncionario(horasMes, salarioHora){
    const contaSalario = horasMes * salarioHora
    return `Salário igual a R$ ${contaSalario}`
}

console.log(salarioFuncionario(240, 20))