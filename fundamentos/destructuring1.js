// novo recurso do ES2015

const pessoa = {
    nome: 'Carolina',
    idade: '27',
    endereco: {
        lagradouro: 'R cod',
        numero: 1002
    }
}
console.log(pessoa)

const{ nome, idade } = pessoa //removendo do bloco o nome das variáveis 'nome' e 'idade', exibindo apenas valor
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada) // Aqui mostra o 'sobrenome' como undefined, ou seja, não foi tocada mas existe

const { endereco: { lagradouro, numero, cep } } = pessoa // Acessando a var dentro da var e ainda acrescentando 'cep'
console.log(lagradouro, numero, cep)