//https://professores.unisanta.br/sobrino/tweb/

//----ex1----
/*let frase;
let num = prompt('Insira o número: ');

function parOuImpar(num){
    
    if(num%2 == 0){
        frase = "O número digitado é par";
        return frase;
    }
    else{
        frase = "O número digitado é ímpar";
        return frase;
    }
}

parOuImpar(num);
console.log(frase)

//----ex2----
let n1=4, n2=8, n3=1;

function maiorNum(n1, n2, n3){
    if(n1>n2 && n1>n3){
        maior = n1;
        return maior;
    }
    else if(n2>n1 && n2>n3){
        maior = n2;
        return maior;
    }
    else{
        maior = n3
        return maior;
    }
}

maiorNum(n1, n2, n3)
console.log('O maior número é',maior)

//----ex3----
let p1=5, p2=9.5;
let media;
function calcularMedia(p1,p2){
    media = (p1+p2*2)/3;
    media=media.toFixed(2);
    return media;
}
calcularMedia(p1,p2);
console.log("A sua média é",media);

//----ex4----
let n1=5, n2=9.5, n3=7, n4=4.5;
let media;
function calcularMedia(n1,n2,n3,n4){
    media = (n1+n2+n3+n4)/4;
    media=media.toFixed(2);
    return media;
}
calcularMedia(n1,n2,n3,n4);
console.log("A sua média é",media);

//----ex5----
let p1=8, p2=9;
function validarNota(p1,p2){
    if (p1<0 || p2<0 || p1>10 || p2>10){
        return false;
    }
    else{
        return true;
    }
}
validarNota(p1,p2)*/

//----ex6----
let p1=5, p2=9.5;
let media;
function medias(p1, p2){
    media = (p1+p2*2)/3;
    media=media.toFixed(2);
    return media;
}
medias(p1,p2);
console.log("A sua média é",media);