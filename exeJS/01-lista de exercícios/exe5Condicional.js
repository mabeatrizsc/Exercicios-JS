/* Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

const precoEtanol = 4.4;
const precoGasolina = 5.5;
const distanciaKm = 35;
const gastoPorKm = 12;
const tipo = 'Gasolina';

const consumo = distanciaKm / gastoPorKm ;

if (tipo === 'Gasolina'){
    const valor = consumo * precoGasolina ;
    console.log(valor.toFixed(2));
}else{
    const valor = consumo * precoEtanol ;
    console.log(valor.toFixed(2));
}