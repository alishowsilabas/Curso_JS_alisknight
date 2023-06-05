const nums = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

for (x in nums){
    if(x == 5) {
        break        /* o 'break' age no bloco 'for', 'while' e 'switch' mais próximo
                      o 'break interrompe o laço e faz com que vá para o próximo laço */
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue  /* o 'continue' interrompe o laço, porém não joga para o próximo laço,
                    mas continua a sequencia no mesmo laço, diferente do 'break' */ 
    }
    console.log(`${y} = ${nums[y]}`)
}