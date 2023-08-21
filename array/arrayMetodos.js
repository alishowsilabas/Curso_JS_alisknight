const pilotos = ['Vettel','Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // pop Remove o ultimo elemento do array
console.log(pilotos)

// push adciona o elemento ao array
pilotos.push('Verstappen')
console.log(pilotos)

// shift remove o primeiro elemento do array
pilotos.shift() 
console.log(pilotos)

// unshift adciona um elemento ao primeiro array
pilotos.unshift('Hamilton') 
console.log(pilotos)

// splice pode tanto adcionar quanto remover elementos de um array
pilotos.splice(2, 0, 'Bottas', 'Massa') // (2, 0) significa que antes do array [2] será adcionado
console.log(pilotos)

// Remover com splice
pilotos.splice(3, 1) // (3, 1) significa que: remove 1 item, o índice [3] do array
console.log(pilotos)

// slice retorna um novo array, 'fatiando' um array, formando assim 2 arrays com os elementos de um só
const algunsPilotos1 = pilotos.slice(2)// slice(2) retorna um novo array a partir do índice [2]
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // divide o array da const 'pilotos', criando um novo array do [1] ao [3]
console.log(algunsPilotos2)

console.log(pilotos)