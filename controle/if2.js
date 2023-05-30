function test1(num) {
    if (num > 7)
    console.log(num) // associado ao bloco 'if'

    console.log('Final') // não associado ao bloco 'if'
}

test1(6)
test1(8)

function test2(num){
    if(num > 7); {     // ';' neste caso é um sentença de cod vazio, não usar em estrutura de controle
        console.log(num)
    }
}

test2(6)
test2(8)