function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];
    let resultado = '';

    if (escolhaUsuario === escolhaComputador) {
        resultado = 'Empate!';
    } else if (
        (escolhaUsuario === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaUsuario === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaUsuario === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você venceu!';
    } else {
        resultado = 'Você perdeu!';
    }

    document.getElementById('resultado').innerText = `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`;
}
