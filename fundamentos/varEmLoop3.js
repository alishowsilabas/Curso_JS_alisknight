const funcs = []

for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i)
    })
}

/* O valor de 'i' será sempre 10 neste caso pois este é um problema cronico do JS com este tipo de função
dentro de um bloco de codigos utilizando 'var' */
funcs[2]()
funcs[7]()