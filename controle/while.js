function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1) {
    opcao = getInteiroAleatorioEntre(-1, 7)
    console.log(`Quantas vezes o Big afunda por semana ${opcao},`)
}

console.log('See you next time!')