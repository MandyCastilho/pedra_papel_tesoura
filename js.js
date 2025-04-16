let pontuacaoUsuario = 0;
let pontuacaoComputador = 0;
let historico = [];

function jogar(escolhaUsuario) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * opcoes.length)];
    let resultado = '';

    if (!opcoes.includes(escolhaUsuario)) {
        console.error('Escolha inválida:', escolhaUsuario);
        return;
    }

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

    // Atualizar os elementos na tela (com verificação de existência)
    const resultadoElem = document.getElementById('resultado');
    const placarElem = document.getElementById('placar');
    const historicoElem = document.getElementById('historico');

    if (resultadoElem && placarElem && historicoElem) {
        resultadoElem.innerText = 
            `Você escolheu ${escolhaUsuario}. O computador escolheu ${escolhaComputador}. ${resultado}`;
        
        placarElem.innerText = 
            `Placar - Você: ${pontuacaoUsuario} | Computador: ${pontuacaoComputador}`;
        
        historicoElem.innerHTML = historico
            .map((item, index) => `<li>Rodada ${index + 1}: ${item}</li>`)
            .join('');
    } else {
        console.warn('Algum elemento HTML não foi encontrado.');
    }
}

function resetarJogo() {
    pontuacaoUsuario = 0;
    pontuacaoComputador = 0;
    historico = [];

    const resultadoElem = document.getElementById('resultado');
    const placarElem = document.getElementById('placar');
    const historicoElem = document.getElementById('historico');

    if (resultadoElem) resultadoElem.innerText = '';
    if (placarElem) placarElem.innerText = 'Placar - Você: 0 | Computador: 0';
    if (historicoElem) historicoElem.innerHTML = '';
}


