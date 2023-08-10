console.log(typeof Array, typeof new Array, typeof[])

let aprovados = new Array('Bia', 'Carla', 'Diana')
console.log(aprovados)

aprovados = ['Bia', 'Carla', 'Diana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3]) // não da erro, apenas é 'undefined'

aprovados[3] = 'Paula'
aprovados.push('Paulo')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length) // funciona, porém irá criar arrays 'undefined' até o 9
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)