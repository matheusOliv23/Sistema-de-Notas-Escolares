/* Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema numérico
para sistema de notas em caracteres tipo ABC

* 90 em diante  - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60  - F

*/

let nota = 60

function getNota(nota) {

let notaA = nota >= 90 & nota <= 100
let notaB = nota >= 80 & nota <= 89
let notaC = nota >= 70 & nota <= 79
let notaD = nota >= 60 & nota <= 69
let notaF = nota < 60 &  nota >= 0

let notaFinal;

if (notaA){
    notaFinal = 'A'
}else if (notaB) {
    notaFinal = 'B'
}else if (notaC){
    notaFinal = 'C'
}else if (notaD){
    notaFinal = 'D'
}else if (notaF){
    notaFinal = 'F'
} else {
    notaFinal = 'Nota inválida'
}

return notaFinal;
}

console.log(getNota(30))
console.log(getNota(78))
console.log(getNota(58))
console.log(getNota(98))
console.log(getNota(84))
console.log(getNota(101))