let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMenssagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p' , 'Escolha um número de 1 a 10');
    
}
exibirMenssagemInicial();

//corpo da função

function verificarChute() {
    let chute = document.querySelector('input').value

    if (chute == numeroSecreto){
        exibirTextoNaTela ('h1' , 'Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let menssagemTentativas  = `Você descrobiu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela ('p' , menssagemTentativas);
        document.getElementById('reiniciar').removeAttribute;('disabled');
        } else {
            if (chute > numeroSecreto) {
                exibirTextoNaTela ('p' , 'O número secreto é menor');
            } else{
                exibirTextoNaTela ('p' , 'O número secreto é maior');
            } 
            tentativas++;
            limparCampo();
        }
}

function gerarNumeroAleatorio() {
    return parseInt (Math.random() * 10 + 1);
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled' , true);
}