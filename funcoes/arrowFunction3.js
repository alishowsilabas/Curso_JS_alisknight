let comparaComThis = function(param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // aqui o param nao esta em ambito global pois está atribuido ao bloco arrow
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj) // arrow function > bind
comparaComThisArrow(obj) // comparaComThisArrow !== comparaComThis.bind pois o arrow function tem prioridade
comparaComThisArrow(module.exports)