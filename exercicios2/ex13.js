function inverter(objeto){
    const objetoInvertido = {}

    Object.entries(objeto).forEach(parChaveEValor => {
        const chave = 0,
        valor = 1
        
        objetoInvertido[parChaveEValor[valor]] = parChaveEValor[chave]
    })

    return objetoInvertido
}

const meuObjeto = {nome: 'Carolina', numero: 1}

console.log(inverter(meuObjeto))