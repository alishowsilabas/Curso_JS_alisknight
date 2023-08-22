const vaquinha = [
    {nome: 'Joao', valor: 7.5,  pix: false},
    {nome: 'Jorge', valor: 9.2, pix: true},
    {nome: 'Maria', valor: 9.8, pix: false},
    {nome: 'Pedro', valor: 8.7, pix: false}
]

const todosPagamNoPix = (resultado, pix) => resultado && pix
console.log(vaquinha.map(a => a.pix).reduce(todosPagamNoPix))

const alguemNoPix = (resultado, pix) => resultado || pix
console.log(vaquinha.map(a => a.pix).reduce(alguemNoPix))