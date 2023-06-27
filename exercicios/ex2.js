function tipoTriangulo(l1, l2, l3) {
    if(l1 == l2 && l2 == l3){
        return ("Triangulo Equilátero")
    } else if (l1 != l2 && l2 != l3){
        return ("Triangulo Escaleno")
    } else {
        return ("Triangulo Isóseles")
    }
}

console.log(tipoTriangulo(1, 1, 1))
console.log(tipoTriangulo(1, 1, 2))
console.log(tipoTriangulo(1, 2, 3))