// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobronome: 'Silva'
    }
}
console.log(criarPessoa())

// function factory para solucionar casos repetitivos como este abaixo
/* 
const prod1 = {
    nome: '...',
    preco: 45
}

const prod2 = {
    nome: '...',
    preco 50
}
*/