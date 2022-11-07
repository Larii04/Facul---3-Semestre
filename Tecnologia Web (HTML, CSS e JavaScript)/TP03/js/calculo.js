"use strict";

const btnSomar = document.getElementById("btnSomar");
const resul = document.getElementById("resul");

function pegarNum1(){
    return +parseFloat(document.getElementById("num1").value);
}

function pegarNum2(){
    return +parseFloat(document.getElementById("num2").value);
}

function somaNum(){
    let num1 = pegarNum1();
    let num2 = pegarNum2();
    resul.textContent = "A soma é " + (num1+num2);
}
/*
btnSomar.onclick = function(){
    somaNum();
}*/

//Usando o EventListener
btnSomar.addEventListener("click", somaNum);