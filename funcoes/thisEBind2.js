// setInterval dispara uma outra function de acordo com o intervalo passado em milisegundos
// possibilitando passar uma function como parametro para uma outra function
// também é possível, dentro do '()' de setInterval, passar uma function anonima como foi feito abaixo
function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {   
    self.idade++
    console.log(self.idade)
    }, 1000)
}

new Pessoa

// segunda forma de fazer o 'this' ficar bindado onde a gente quer
function Pessoa2() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa2