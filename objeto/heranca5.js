console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Estudos alisknight'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5])
console.log('a', 'b', 'c')

// String.prototype já tem uma função .toString
// evitar sobrescrever funções/comportamentos
String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Estudos reverse'.reverse())