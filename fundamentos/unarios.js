let num1 = 1
let num2 = 2

num1++ // pos fixed, ou seja, ascrecenta 1 apos a 'var' ser 'lida'
console.log(num1)

--num1 // pre fixed, ou seja, subtrai um da 'var' antes de 'ler'
console.log(num1)

console.log(++num1 === num2--) // true pois as 'var' são comparadas antes de executar 'num2--'
console.log(num1 === num2)
console.log(++num1 === --num2) // false pois a comparação das 'var' são realizadas após o acrescento e decremento
