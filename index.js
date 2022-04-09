const display = document.getElementById("resultado");
const numeros = document.querySelectorAll("[id*= botao]");
const operadores = document.querySelectorAll("[id*= tecla]");
const limpar = document.querySelectorAll("#limpar");

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPnedente = () => operador !== undefined;

const calcular = () => {
    if (operacaoPnedente()) {
        novoNumero = true;
        const numeroAtual = parseFloat(display.textContent);
        const resultado = eval(`${numeroAnterior} ${operador} ${numeroAtual}`);
        atualizarDisplay(resultado);

    }
}

const atualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false
    } else { display.textContent += texto; }

}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach(numero => numero.addEventListener("click", inserirNumero));

const limpaDisplay = () => {
    novoNumero = true;
    atualizarDisplay("");
}
limpar.forEach(limpa => limpa.addEventListener("click", limpaDisplay));



function selecionarOperador(evento) {
    if (!novoNumero) {
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent);
    }


}
operadores.forEach(operador => operador.addEventListener("click", selecionarOperador));