let contador = 1
while(contador <= 10){
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++){
    console.log(`i = ${i}`)
}

const notas = [6.2, 7.3, 8.5, 9.3, 10.1]
for(let i = 0; i < notas.length; i++) { // .lenght pra ver o tamanho de um array e i++ adciona 1 a cada interação
    console.log(`nota = ${notas[i]}`)
} 
