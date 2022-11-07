/*"Use strict";

let x=10, y=20, z;
console.log(typeof z);
z=x+y;
console.log(x+y); //Operadores matemáticos: + - * / **  math.pow
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x**y);

var p1=7.5, p2=5.5;
let media;
media = (p1+p2*2)/3;
console.log("A sua media é ", media.toFixed(2));

var p1=7.5, p2=5.5;
let media;
media = (p1+p2*2)/3;
if(!(media>=5)){
    console.log("De exame!");
}
else{
    console.log("Aprovada")
}

var p1=7.5, p2=5.5;
let media;
media = (p1+p2*2)/3;
if (media>=9){
    console.log("Conceito: A");
}
else if (media>=7 && media<9){ //operadores relacionais: >  <  >=  <=  ==  !=  ===(Estritamento igual)   !==(Não igual)
    console.log("Conceito: B");
}
else if (media>=5 && media<7){ //Operadores lógicos: &&  || !
    console.log("Conceito: C");
}
else if (media>=2 && media<5){
    console.log("Conceito: D");
}
else{
    console.log("Conceito: E");
}

let situacao = (media>=5) ? "Aprovado":"De exame" //Modo de fazer a estrutura if e else
console.log(situacao)

//While not eof (end of file)
var i;
for (i=1;i<=10;i++){
    console.log(i);
}

var i=10;
while (i >= 0){
    console.log(i);
    i--;
}

var i=0
do{
    console.log(i);
    i+=2;
}while(i <= 20)*/

var p1=5, p2=9.5;
let media;
function calcularMedia(p1,p2){
    media = (p1+p2*2)/3;
    media=media.toFixed(2);
    return media;
}
calcularMedia(p1,p2);
console.log("A sua média é",media);