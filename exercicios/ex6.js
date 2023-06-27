function jurosSimples (capitalInicial, juros, tempo) {
    return capitalInicial + (capitalInicial * juros * tempo)
}

function jurosCompostos (capitalInicial, juros, tempo) {
    return capitalInicial * (1 + juros) ** tempo
}

console.log(jurosSimples(10, 50/100, 2)) // lembrete: 50/100 significa taxas de 50%
console.log(jurosCompostos(10, 50/100, 2))