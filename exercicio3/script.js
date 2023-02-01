// Exercicio 3

// variaveis perguntas e respostas
const nomeCompleto = 'Qual seu nome completo?'
const respostaNomeCompleto = prompt(nomeCompleto)
const dataDeNascimento = 'Qual a sua data de nascimento?'
const respostaDataDeNascimento = prompt(dataDeNascimento)
let endereco = 'Informe seu endereço'
let respostaEndereco = prompt(endereco)
const documentoCpf = 'Informe seu número de CPF'
const respostaDocumentoCpf = prompt(documentoCpf)
let nivelDeEscolaridade = 'Qual seu nivel de escolaridade?'
let respostaNivelDeEscolaridade = prompt(nivelDeEscolaridade)
let possuiCnh = 'Possui CNH?'
let respostaPossuiCnh = confirm(possuiCnh)
let numeroDeFilhes = 'Quantos filhes possui?'
let respostaNumeroDeFilhes = Number(prompt(numeroDeFilhes))
let cargoAtual = 'Qual o seu cargo atual?'
let respostaCargoAtual = prompt(cargoAtual)
let recebeComissao = 'Recebe comissao? Se sim informe a porcentagem, caso contrario, responda com zero'
let respostaRecebeComissao = Number(prompt(recebeComissao))
const anoDeAdmissao = 'Qual o ano de admissao?'
const respostaAnoDeAdmissao = Number(prompt(anoDeAdmissao))

// impressao typeof e relatorio pessoa colaboradora
console.log(`
${nomeCompleto} - ${respostaNomeCompleto}
${dataDeNascimento} - ${respostaDataDeNascimento}
${endereco} - ${respostaEndereco}
${documentoCpf} - ${respostaDocumentoCpf}
${nivelDeEscolaridade} - ${respostaNivelDeEscolaridade}
${possuiCnh} - ${respostaPossuiCnh}
${numeroDeFilhes} - ${respostaNumeroDeFilhes}
${cargoAtual} - ${respostaCargoAtual}
${recebeComissao} - ${respostaRecebeComissao}
${anoDeAdmissao} - ${respostaAnoDeAdmissao} `)

console.log(typeof respostaNomeCompleto, typeof respostaDataDeNascimento, typeof respostaEndereco, typeof respostaDocumentoCpf, typeof respostaNivelDeEscolaridade, typeof respostaPossuiCnh, typeof respostaNumeroDeFilhes, typeof respostaCargoAtual, typeof respostaRecebeComissao, typeof respostaAnoDeAdmissao )