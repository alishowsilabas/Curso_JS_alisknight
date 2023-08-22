const vaquinha = [
    {nome: 'Joao', valor: 7.5,  pix: false},
    {nome: 'Jorge', valor: 9.2, pix: true},
    {nome: 'Maria', valor: 9.8, pix: false},
    {nome: 'Pedro', valor: 8.7, pix: true}
]

console.log(vaquinha.map(a => a.valor))

const taotalVaquinha = vaquinha.map(a => a.valor).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(taotalVaquinha)