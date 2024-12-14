/* 1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 */

class carro {
    marca;
    cor;
    combustivelPorKm;

    constructor(marca, cor, combustivelPorKm){
        this.marca = marca;
        this.cor = cor;
        this.combustivelPorKm = combustivelPorKm;
    }

    calculoViagem(distancia, precoCombustivel){
        return distancia * this.combustivelPorKm * precoCombustivel;
    }
}

const uno = new carro('Fiat', 'prata', 1/12);
console.log(uno.calculoViagem(35, 5.5));