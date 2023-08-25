function objetoParaArray(objeto){
    const resultado = []
    for(let chave in objeto) {
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

const meuObjeto = {
    nome: "Ahrislon",
    idade: 12,
    cidade: "SP"
};

const arrayDeArrays = objetoParaArray(meuObjeto);
console.log(arrayDeArrays);
