function repetirItem(elemento, quantidade){
    let resultado = []

    for(let i = 0; i < quantidade; i++)
        resultado.push(elemento)
    return resultado
}

console.log(repetirItem('Pc', 10))