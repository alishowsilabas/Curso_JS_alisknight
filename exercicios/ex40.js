function conceituarNotas(notas){
    let conceitos = []
    for (let i = 0; i < notas.length; i++){
        if(notas[i] >= 0 && notas[i] <= 4.9){
            conceitos.push('Nota D')
        } else if (notas[i] > 4.9 && notas[i] <= 6.9){
            conceitos.push('Nota C')
        } else if (notas[i] > 6.9 && notas[i] <= 8.9){
            conceitos.push('Nota B')
        } else if (notas[i] > 8.9 && notas[i] <= 10){
            conceitos.push('Nota A')
        } else {
            conceitos.push('Nota inválida')
        }
    }
    return conceitos
}

let notas = [10, 9, 8, 11, 12, 7, 6, 5, 4.95, 3, 2, 1]
let vetorConceitos = conceituarNotas(notas)

console.log(vetorConceitos)