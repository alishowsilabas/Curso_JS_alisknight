function ehONUmeroAleatorio(meuNumero){
    const min = 1
    const max = 10
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min)

    return (meuNumero === numeroAleatorio ?
        `Parabéns! O numero sorteado foi ${numeroAleatorio}` :
        `Que pena! O numero sorteado foi ${numeroAleatorio}`
    )
}

console.log(ehONUmeroAleatorio(5))