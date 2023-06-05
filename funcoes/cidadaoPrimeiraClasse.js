// Function em JS é First-Class Object (Citizen)
// High-order function


// Criando de forma literal
function fun1() { }

// Armezenando uma Function em uma var/const/let
const fun2 = function() { }

// Armazenando uma Function dentro de um Array
const array = [function(a, b) {return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenando em um atributo OBJ
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passando uma Function como Parametro para outra Function
function run(fun) {
    fun()
}

run(function(){ console.log('Executando...')})

// Uma Function pode retornar/conter uma Function
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 3)(4) // Aqui o resultado da soma(2, 3) é outra função, logo necessário () após chamada de 'soma'
const cincoMais = soma(2, 3) // Outra possibilidade caso queira chamar em outra ocasião o 'cincoMais'
cincoMais(4)