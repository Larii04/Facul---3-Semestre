"use strict";

const btnSaudar = document.getElementById("btnSaudar");
const saida = document.getElementById("saida");

btnSaudar.onclick = function(){
    let nome = document.getElementById("nome").value;
    saida.textContent = "Oi, " + nome + "!";
}