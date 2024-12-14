/* Elabore um algoritmo que dado o peso e a altura, mostre sua condição de acordo com a tabela abaixo:

IMC em adultos Condição
- Abaixo de 18.5 = abaixo do peso;
- Entre 18.5 e 25 = peso normal;
- Entre 25 e 30 = acima do peso;
- Entre 30 e 40 = obeso;
- Acima de 40 = obesidade grave;
 
Fórmula IMC:
IMC = peso/ (altura * altura)
*/
function calculoImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function selecionarImc(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Acima do peso";
    } else if (imc >= 30 && imc < 40) {
        return "Obesidade";
    } else {
        return "Obesidade grave";
    }

}

//Main -> função 
(function (){
    const altura = 1.54;
    const peso = 97;

    const imc = calculoImc(peso, altura);
    console.log(selecionarImc(imc));
})();

