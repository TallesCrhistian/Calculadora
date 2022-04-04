let botao = document.querySelectorAll(".botao");
let display = document.getElementById("resultado");
let valorDisplay = display.textContent;



for (let i = 0; i < botao.length; i++) {
    botao[i].addEventListener('click', (event) => {

        var valor = botao[i];
        display.textContent += valor.textContent;
    })
}

let botaoC = document.querySelectorAll("#botao__c");
for (let i = 0; i < botaoC.length; i++) {
    botaoC[i].addEventListener('click', (event) => {

        display.textContent = "";

    })
}

let botaoDiv = document.querySelectorAll("#botao__divisao");
for (let i = 0; i < botaoC.length; i++) {
    botaoDiv[i].addEventListener('click', () => {
        display.textContent += "/";

    })
}
let botaoIgual = document.querySelectorAll("#botao__igual");
for (let i = 0; i < botaoIgual.length; i++) {
    botaoIgual[i].addEventListener('click', () => {
        function Soma(textContent) {
            var DECIMAL = 10;
            return parseInt(valorDisplay);
        }
    })
}

let botaoMais = document.querySelectorAll("#botao__mais");
for (let i = 0; i < botaoIgual.length; i++) {
    botaoMais[i].addEventListener('click', () => {
        valorDisplay += valorDisplay + "+";
        console.log(valorDisplay)
    })
}
















////for (i = 0; i < botao.length; i++) {
//    botao.addEventListener("click", function() {
//        console.log("clickei");
//    })
//}