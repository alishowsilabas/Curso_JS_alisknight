function soBoaNoticia(nota) {
    if(nota >= 7) {
        console.log('Aprovado com a nota ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.9)

function seForVerdadeEuFalo(valor){
    if(valor) {
        console.log('TRUE! ' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1) // true
seForVerdadeEuFalo(' ') // true
seForVerdadeEuFalo('?') // true
seForVerdadeEuFalo([]) // true
seForVerdadeEuFalo([1, 2]) // true
seForVerdadeEuFalo({}) // true