import {calculoPercentual } from "./scripts_calculos.js"
function mensagem(){
console.log('Uma mensagem')
}

mensagem()

function mensagemLinda(txt){
    console.log(txt)
}

mensagemLinda('Brasil vai dar um pau no Haiti')


function somaNumeros(num1, num2){
    return num1 + num2
}

console.log('As somas dos números ', somaNumeros(10, 58))

const multiplicacao = function(num1, num2){
    return num1 * num2
}

console.log(multiplicacao(64, 5))

console.log('--------> ARROW FUNCTION <---------')

const msgArrow = () => {
    console.log('Outra mensagem na arrow function')
}

msgArrow()

const divisaoNum = (valor1 , valor2) => {

    let reposta

    if ((valor1 > 0) && (valor2 > 0)){
        return valor1 / valor2
    }else{ 
        reposta = 'NÃO É POSSÍVEL DIVISÃO POR ZERO'
    }
    
    return reposta
}

console.log(divisaoNum(10,80000))

console.log(Math.random())

console.log('O número sorteado ====>',parseInt(Math.random() * 100))

setTimeout(() => {
    console.log('Executou após 5s')
    msgArrow()
}, 5000)
/*
let cont = 0 
const intervalo = setInterval(()=>{
    cont++
    console.log(cont, 'Repetição da setInterval')

    if(cont == 5){
        clearInterval(intervalo)
    }
}, 3000)*/
/*
const divNumSorteio = document.querySelector('#div-num-sorteio');

let contVolta = 0;
let numSorteado = 0;
let contPar = 0;
let contImpar = 0;

const sorteio = setInterval(() => {
    contVolta++;

    numSorteado = Math.floor(Math.random() * 60) + 1;

    console.log(`${contVolta}º Número sorteado: ${numSorteado}`);

    if (numSorteado % 2 === 0) {
        contPar++;
    } else {
        contImpar++;
    }

    divNumSorteio.innerHTML += `
        ${contVolta}º número gerado: ${numSorteado}
        - ${numSorteado % 2 === 0 ? 'Par' : 'Ímpar'} <br>
    `;

    if (numSorteado === 6) {
        divNumSorteio.innerHTML += `
            <hr>
            SORTEIO ENCERRADO <br>
            TOTAL DE NÚMEROS GERADOS: ${contVolta} <br>
            TOTAL DE NÚMEROS PARES: ${contPar} <br>
            TOTAL DE NÚMEROS ÍMPARES: ${contImpar}
        `;

        clearInterval(sorteio);
    }
}, 2000);

*/

//CHAMANDO A FUNÇÃO DE OUTRO ARQUIVO 
console.log('CÁLCULO DA FUNÇÃO calculoPercentual do ARQUIVO scripts_calculos.js', calculoPercentual(750))