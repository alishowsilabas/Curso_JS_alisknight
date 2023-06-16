// arrow function faz com o que o 'this' fique automaticamente vinculado
// abaixo estão exemplos de como realizar a mesma função com e sem arrow
let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a 
}

// se voce tiver apenas um unico parametro é possível remover o '()' e return é auto chamado implicitamente
dobro = a => 2 * a 
console.log(dobro(Math.PI))

// mais exemplos de como usar arrow para simplificar 
let ola = function() {
    return 'Olá'
}

ola = () => 'Olá' // modo mais padrão
ola = _ => 'Olá' // possui um param => '_'
console.log(ola())