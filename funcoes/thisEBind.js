const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // com o 'this.saudacao' a gente está acessando o 'saudacao' de 'pessoa'
    }
}

pessoa.falar()
const falar = pessoa.falar // Armazenando a function 'pessoa.falar' dentro da const 'falar' é possível
falar() // conflito entre paradigmas: funciona e OO (Orientado a Objeto)
        // acima ao armazenar a function dentro da const, faz com que o this lá em cima não esteja mais se
        // referindo ao 'saudacao' dentro da const 'pessoa'

const falarDePessoa = pessoa.falar.bind(pessoa) // o bind serve para resolver a relação do 'this'
falarDePessoa() // acima bindamos o 'this' em 'pessoa'

// aqui confirma o fato do 'this' estar bindado apenas a 'falar' dentro de 'pessoa'
const falar2 = pessoa.falar
falar2()