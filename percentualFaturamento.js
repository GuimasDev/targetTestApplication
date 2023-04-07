/**
 * para executar use: node .\percentualFaturamento.js
 * 
 * 4) Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.
 */

const SP = 67836.43;
const RJ = 36678.66;
const MG = 29229.88;
const ES = 27165.48;
const Outros = 19849.53;

const faturamentoTotal = SP + RJ + MG + ES + Outros;

function calcularPorcentagem(arg, total){
    return ((arg/total)*100).toFixed(2);
}

console.log("SP: "+ calcularPorcentagem(SP, faturamentoTotal))

console.log("RJ: "+ calcularPorcentagem(RJ, faturamentoTotal))

console.log("MG: "+ calcularPorcentagem(MG, faturamentoTotal))

console.log("ES: "+ calcularPorcentagem(ES, faturamentoTotal))

console.log("Outros: "+ calcularPorcentagem(Outros, faturamentoTotal))