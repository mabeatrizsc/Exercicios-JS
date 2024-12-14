function valorJuros(valor, percentual){
    const acrescimo = (percentual / 100) * valor;
    return valor + acrescimo;
}

console.log(valorJuros(100, 10));