function escrevaNome(name){
    return 'Meu nome é:' + name;
}

function maiorIdade(idade){
    if (idade <18) {
        return 'Eu sou de menor';
    }else {
        return 'Eu sou de maior';
    }
}

console.log(escrevaNome(' Maria'));
console.log(maiorIdade(12));