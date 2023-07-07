function hortifruti(fruta) {
    switch(fruta) {
        case 'maçã':
            console.log('Não vendemos esta fruta aqui')
            break
        case 'kiwi':
            console.log('Estamos com escasses de kiwis')
            break
        case 'melancia':
            console.log('Aqui está, são 3 reais o quilo')
            break
        default:
        'Fruta inválida'
    }
}

hortifruti('maçã')
hortifruti('kiwi')
hortifruti('melancia')
hortifruti()