const btnCalcular = document.getElementById("btnCalcular");
const resul = document.getElementById("resul");

function pegarP1(){
    return +parseFloat(document.getElementById("p1").value);
}

function pegarP2(){
    return +parseFloat(document.getElementById("p2").value);
}

function calculoMedia(){
    let p1 = pegarP1();
    let p2 = pegarP2();
    media = (p1+p2*2)/3;
    resul.textContent = "A sua média é " + media;
}

btnCalcular.onclick = function(){
    calculoMedia();
}