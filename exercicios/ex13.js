const tipoDia = function(dia) {
    switch (dia){
        case 2: case 3: case 4: case 5: case 6:
            console.log('Dia de semana')
            break
        case 1: case 7:
            console.log('Fim de semana')
            break
        default:
        console.log('Dia inválido') 
    }
}

tipoDia(1)
tipoDia(4)
tipoDia(2)
tipoDia(7)
tipoDia()
tipoDia(8)
tipoDia(0)