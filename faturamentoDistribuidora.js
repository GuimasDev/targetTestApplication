/**
 * para executar use: node .\faturamentoDistribuidora.js
 * 
  3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
    - O menor valor de faturamento ocorrido em um dia do mês;
    - O maior valor de faturamento ocorrido em um dia do mês;
    - Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

 */

let array = require('./arquivoJson.json');

function menorFaturamento(arr){
    let menorValor = arr[0].valor;
    arr.forEach(({valor}) => {
        menorValor = (valor && valor < menorValor) ? valor : menorValor
    });

    return menorValor
}

function maiorFaturamento(arr){
    let maiorValor = 0;
    arr.forEach(({valor}) => {
        maiorValor = (valor && valor > maiorValor) ? valor : maiorValor
    });

    return maiorValor
}

console.log("O menor valor de faturamento ocorrido em um dia do mês é de: "+ menorFaturamento(array))
console.log("O maior valor de faturamento ocorrido em um dia do mês é de: "+ maiorFaturamento(array))


