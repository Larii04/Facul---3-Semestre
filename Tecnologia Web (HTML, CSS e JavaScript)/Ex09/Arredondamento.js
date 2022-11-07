function arredondarNota(media1){
    let media = media1;
    media = media.toFixed(2);

    str = media.toString();
    separada = str.split('.');

    inteiro = parseInt(separada[0]);
    decimal = parseInt(separada[1])

    if(decimal[0] > 0 && decimal[0] <= 9){
        decimal *= 10;
    }

    if(decimal < 25){
        inteiro = inteiro;
        decimal = 0;
    }
    else if(decimal > 24 && decimal < 75){
        inteiro = inteiro;
        decimal = 5;
    }
    else{
        inteiro = inteiro+1;
        decimal = 0;
    }

    inteiroStr = inteiro.toString();
    decimalStr = decimal.toString();

    juntos = inteiroStr + '.' + decimalStr;

    return juntos
}

for (var i=0; i <1; i+=0.01){
    console.log(i,'    ',arredondarNota(i))
}