function filtrarNumerosNoArray(array){
    for ( let i = 0; i < array.length; i++){
        if (typeof array[i] === 'number'){
            console.log(`O Index ${i} do array é o número ${array[i]}`)
        }
    }    
}

const meuArray = ['Estudo', 10, 'Amora', 20, 'Abóbora', 30]
filtrarNumerosNoArray(meuArray)