// par nome/valor
const saudacao = 'Bom dia' //Contexto Léxico 1

function exec(){
    const saudacao = 'Boa tarde' //Contexto Léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Carolina',
    idade: 27,
    peso: 54,
    endereco: {
        rua: 'R. Roberson',
        numero: 57
    }
}

/* Cada variável é exibida com valores diferentes mesmo tendo nomes iguais, pois são definidas 
diferentemente em cada contexto */
console.log(saudacao)
console.log(exec())
console.log(cliente)