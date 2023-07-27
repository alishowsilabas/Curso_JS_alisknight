const a = 1
const b = 2
const c = 3

// antigamente era utilizado desta forma \/
const obj1 = {a: a, b: b, c: c}

// nova forma \/
const obj2 = {a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 5.5

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)
// mesma funcionalidade, forma diferente de realizar \/
const obj4 = {[nomeAttr]:valorAttr} // o que esta entre colchetes é a variável que servirá como atributo do objeto
console.log(obj4)

const obj5 = {
    // forma tradicional \/
    funcao1: function() {
        // ...
    },

    // nova forma reduzida: es6 \/
    funcao2(){
        // ...
    }
}
console.log(obj5)