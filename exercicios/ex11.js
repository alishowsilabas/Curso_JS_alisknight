function AnoBissesxto(ano) {
    if (ano <= 0){
        return false
    } else if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    } else {
        return false
    }
}

console.log(AnoBissesxto(0))
console.log(AnoBissesxto(4))
console.log(AnoBissesxto(100))
console.log(AnoBissesxto(400))
console.log(AnoBissesxto(800))
console.log(AnoBissesxto(2015))
console.log(AnoBissesxto(2023))