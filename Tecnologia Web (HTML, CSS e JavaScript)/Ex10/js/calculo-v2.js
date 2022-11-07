const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const btnCalc = document.querySelector('#btnCalcular');
const resul = document.querySelector('#resul');

function verifica(){
    if (p1.value != null || p1.value != "" && p2.value != null || p2.value != ""){
        onChange3()
    }
}
function getp1(){

    return +p1.value;
}
function getp2(){

    return +p2.value;
}

function media(p1,p2){

    let media = (p1 + (2*p2))/3
    media = media.toFixed(1)
    return media
}

function onClick(){
    let arredonda = media(getp1(),getp2()) - Math.trunc(media(getp1(),getp2()))
    let M = media(getp1(),getp2())
    console.log(arredonda)
    if(arredonda < 0.25){
        resul.textContent = Math.floor(media(getp1(),getp2()))
    }
    else if(arredonda > 0.24 && arredonda < 0.75){

        M[1] = 5;
        resul.textContent = M
    }
    else{
        resul.textContent = Math.ceil(media(getp1(),getp2()))
    }
    console.log(M)   
}

function onChange3(){
    let arredonda = media(getp1(),getp2()) - Math.trunc(media(getp1(),getp2()))
    let M = media(getp1(),getp2())
    console.log(arredonda)
    if(arredonda < 0.25){
        resul.textContent = Math.floor(media(getp1(),getp2()))
    }
    else if(arredonda > 0.24 && arredonda < 0.75){

        M[1] = 5;
        resul.textContent = M
    }
    else{
        resul.textContent = Math.ceil(media(getp1(),getp2()))
    }
    console.log(M)
}
function onChange(){
    // arredondarNota = Função da Aula Passada
    p1.value = p1.value
    verifica()
    console.log('P1')
    
}
function onChange2(){
    // arredondarNota = Função da Aula Passada
    p2.value = p2.value
    verifica()
    console.log('P2')
}
btnCalc.addEventListener("click", onClick)
resul.addEventListener("change", onChange3)
p1.addEventListener("change", onChange)
p2.addEventListener("change", onChange2)
