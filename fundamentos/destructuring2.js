const [a] = [10]
console.log(a)

const [n1, , n3, , n4, n5 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n4, n5)

//array dentro do array
//igorando o primeiro array dentro de um array e pegando o segundo elemento no 2º array
const [, [, nota]] = [[, 8, 8], [9, 6, 8]] 
console.log(nota)