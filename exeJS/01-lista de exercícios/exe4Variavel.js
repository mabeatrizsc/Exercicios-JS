/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem. */

let precoCombustivel = 5.5;
let gastoPorKm = 12;
let distanciaKm = 35;

const consumo = distanciaKm / gastoPorKm ;
const valor = consumo * precoCombustivel ;

console.log(valor.toFixed(2));
