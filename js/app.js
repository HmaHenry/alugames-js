contarAlugados();

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name');

    if (botao.innerHTML === 'Devolver') {
        confirmarDevolucao(nomeJogo, botao, imagem);
        contarAlugados();
        
    } else {
        botao.innerHTML = 'Devolver';
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        contarAlugados();
    }
}

function confirmarDevolucao (nomeJogo, botao, imagem) {
    let confirmacaoDevolucao = confirm(`Tem certeza que deseja devolver ${nomeJogo.textContent}?`);
    if (confirmacaoDevolucao == true) {
    botao.innerHTML = 'Alugar';
    botao.classList.remove('dashboard__item__button--return');
    imagem.classList.remove('dashboard__item__img--rented');        
    }              
}

function contarAlugados() {
    let numeroDeAlugados = document.querySelectorAll('.dashboard__item__img--rented');
    let contagemDeAlugados = numeroDeAlugados.length;
    let fraseJogo = (contagemDeAlugados == 1) ? 'jogo está sendo alugado' : 'jogos estão sendo alugados';
    console.log(`${contagemDeAlugados} ${fraseJogo}.`); 
}
