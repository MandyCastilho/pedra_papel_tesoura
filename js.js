let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let historico = [];

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
        pontuacaoUsuario++;
    } else {
        resultado = 'Você perdeu!';
        pontuacaoComputador++;
    }

    // Atualizar o histórico
    historico.push(`Você: ${escolhaUsuario} | PC: ${escolhaComputador} → ${resultado}`);

    // Atualizar os elementos na tela
    document.getElementById('resultado').innerText =
        `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`;

    document.getElementById('placar').innerText =
        `Placar - Você: ${pontuacaoUsuario} | Computador: ${pontuacaoComputador}`;

    document.getElementById('historico').innerHTML = historico
        .map((item, index) => `<li>Rodada ${index + 1}: ${item}</li>`)
        .join('');
}

function resetarJogo() {
    pontuacaoUsuario = 0;
    pontuacaoComputador = 0;
    historico = [];

    document.getElementById('resultado').innerText = '';
    document.getElementById('placar').innerText = 'Placar - Você: 0 | Computador: 0';
    document.getElementById('historico').innerHTML = '';
}

