// Exercicio 1(parte 1)

let nome 
let idade
console.log(typeof nome)
console.log(typeof idade)

// Os tipos de variaveis sao undefined pq nao tem valor definido

nome = prompt('Qual o seu nome?')
idade = prompt('Qual a sua idade?')
console.log(typeof nome)
console.log(typeof idade)

// As duas variaveis retornam com o tipo string, que eh o padrao do 'prompt'

console.log(`Ola, ${nome} voce tem ${idade} anos. Lembre-se: ${nome} e ${idade} sao os valores inseridos pelo usuario.` )


// Exercicio 1 (parte 2)

const pergunta1 = 'Voce gosta de coca-cola?'
const resposta1 = prompt(pergunta1)
const pergunta2 = 'Voce gosta de batata?'
const resposta2 = prompt(pergunta2)
const pergunta3 = 'Voce gosta de estudar?'
const resposta3 = prompt(pergunta3)

console.log(`${pergunta1} - ${resposta1}`)
console.log(`${pergunta2} - ${resposta2}`)
console.log(`${pergunta3} - ${resposta3}`)

