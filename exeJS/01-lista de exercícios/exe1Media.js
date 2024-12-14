/*Calcular a média de três notas e mostrar a classificação de acordo com a tabela abaixo:

- Reprovado = media <5
- Recuperação = media >=5 || media <=7
- Aprovado = media >7
*/

let nota1 = 3;
let nota2 = 6;
let nota3 = 5;

const media = (nota1 + nota2 + nota3) /3;

if (media >=5 || media <=7){
    console.log(media,", Você está de recuperação!");
}else if (media < 5){
    console.log(media,", Você está reprovado!");
}else{
    console.log(media,", Você está aprovado!")
}