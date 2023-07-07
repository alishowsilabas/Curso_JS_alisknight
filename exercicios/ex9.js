function AvaliacaoNotas(nota) {
    let notaCorrecao = arredondamento(nota)
    if (notaCorrecao >= 40) {
        console.log(` ${notaCorrecao}, Aprovado `);
    } else {
        console.log(`${notaCorrecao}, Reprovado`);
    }
}

function arredondamento(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}

AvaliacaoNotas(84)
AvaliacaoNotas(63)
AvaliacaoNotas(44)
AvaliacaoNotas(39)
AvaliacaoNotas(38)
AvaliacaoNotas(37)
AvaliacaoNotas(36)