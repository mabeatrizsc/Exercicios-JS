class Pessoa {
    nome;
    idade;
    ano; 

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.ano = 2024 - idade;
    }
    
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}` );
    }
}

function compararPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

//estudar conceito e diferênça de classe e instância

const maria = new Pessoa('Maria Beatriz', 19);

const lucelia = new Pessoa('Lucélia Carvalho', 44);

console.log(maria);
console.log(lucelia);

maria.descrever();
lucelia.descrever();

compararPessoas(maria, lucelia);