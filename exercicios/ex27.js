function calculoCrescimento (altura1, taxa1, altura2, taxa2){
    if (altura1 == altura2){
        if (taxa1 > taxa2){
            return 'A Criança 1 ultrapassará a Criança 2 em 1 ano.'
        } else if (taxa2 > taxa1){
            return 'A Criança 2 ultrapassará a Criança 1 em 1 ano'
        } else {
            return 'As crianças crecerão igualmente'
        }
    } else {
        if (altura1 > altura2){
            if (taxa1 >= taxa2){
                return 'A criança menor não ultrapassará a criança maior'
            } else {
                return `A criança menor ultrapassará a criança maior em ${calculoTempo(altura2, taxa2, altura1, taxa1)} anos` 
            }
        } else {
            if (taxa2 >= taxa1){
                return 'A criança menor não ultrapassará a maior'
            } else {
                `A criança menor ultrapassará a criança maior em ${calculoTempo(altura2, taxa2, altura1, taxa1)} anos`
            }
        }
    }
}

function calculoTempo(alturaMaior, taxaAlturaMaior, alturaMenor, taxaAlturaMenor){
    let qndtAnos = 0
    while (alturaMenor < alturaMaior){
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        qndtAnos++
    }
    return qndtAnos
}

console.log(calculoCrescimento(150, 2, 150, 2))
console.log(calculoCrescimento(150, 1, 150, 2))
console.log(calculoCrescimento(150, 2, 150, 1))
console.log(calculoCrescimento(140, 2, 150, 2))
console.log(calculoCrescimento(150, 2, 140, 2))
console.log(calculoCrescimento(150, 2, 140, 3))