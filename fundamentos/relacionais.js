console.log('01)', '1' == 1) // 'true' pois é verificado apenas o valor e não tipo
console.log('02)', '1'=== 1) // 'false' pois com '===' é verificado também o tipo e não apenas valor
console.log('03)', '3' != 3) // 'false' para DIFERENTES, pois é verificado apenas o valor e não tipo, logo são iguais
console.log('04)', '3' !== 3) // 'true' para DIFERENTES, pois é verificado também o tipo. Um é string e outro number

console.log('05)', 3 < 3) // 'false' pois 3 não é menor que 3 
console.log('06)', 3 > 3) // 'false' pois 3 não é maior que 3
console.log('07)', 3 <= 3) // 'true' pois 3 menor ou igual 3
console.log('08)', 3 >= 3) // 'true' pois 3 maior ou igual 3

const d1 = new Date(0) // 0 Significa data de marco zero, 01/01/1970
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 == d2)
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined == null)
console.log('13)', undefined === null)


