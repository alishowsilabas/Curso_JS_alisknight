function removendoVogais(frase){
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    const chars = frase.split('')

    const semVogais = chars.filter(char => !vogais.includes(char))
    const resultado = semVogais.join('')

    return resultado
}

const string = 'Como será que fica esta frase sem as vogais?'

const stringSemVogais = removendoVogais(string)
console.log(stringSemVogais)