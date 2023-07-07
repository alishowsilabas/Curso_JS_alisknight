function veiculos(modelos) {
    switch(modelos) {
        case 'sedan':
            return 'Compra efetuada com sucesso'
        case 'hatch':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza de que não quer este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(veiculos('sedan'))
console.log(veiculos('hatch'))
console.log(veiculos('motocicleta'))
console.log(veiculos('caminhonete'))