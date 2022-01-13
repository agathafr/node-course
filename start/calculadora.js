
var calculadora = require("./calculos")

console.log(calculadora.mult(10, 20))
console.log(calculadora.soma(20, 40))

calculadora.nome = "Calculadora da Agatha"
console.log(calculadora.nome);
