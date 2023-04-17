// Aqui definimos uma const vazia
const funcs = []

/* Depois iniciamos um bloco 'for' e dizemos que i = 0 e depois é somado 1 a let 'i' até que chegue a 10
Logo apos puxamos a const 'funcs' com uma function dentro do bloco 'for', a const foi definida dentro do
bloco 'for' e sua função é imprimir o valor de 'i' */ 
for (let i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

// Aqui pegamos o valor de 'i' em cada posição do array
funcs[2]()
funcs[4]()
funcs[6]()
funcs[8]()
funcs[9]()