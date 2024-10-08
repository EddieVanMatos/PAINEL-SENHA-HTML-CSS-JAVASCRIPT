// Simulação de fila de senhas
let filaSenhas = ['A001', 'A002', 'A003', 'A004'];
let senhaAtual = null;

document.getElementById('btn-chamar-senha').addEventListener('click', () => {
    if (filaSenhas.length > 0) {
        senhaAtual = filaSenhas.shift();
        document.getElementById('senha-atual').textContent = senhaAtual;
        atualizarFila();
    } else {
        alert('Nenhuma senha na fila!');
    }
});

function atualizarFila() {
    const filaUl = document.getElementById('fila-senhas');
    filaUl.innerHTML = '';  // Limpa a lista antes de atualizar
    filaSenhas.forEach(senha => {
        const li = document.createElement('li');
        li.textContent = `Senha ${senha}`;
        filaUl.appendChild(li);
    });
}
// Exibe a data e hora em tempo real
function atualizarHora() {
    const dataAtual = new Date();
    document.getElementById('current-date').textContent = dataAtual.toLocaleDateString();
    document.getElementById('current-time').textContent = dataAtual.toLocaleTimeString();
}

setInterval(atualizarHora, 1000); // Atualiza a hora a cada segundo

// Carrossel de anúncios
const anuncios = ['assets/anuncios/anuncio1.jpg', 'assets/anuncios/anuncio2.jpg', 'assets/anuncios/anuncio3.jpg'];
let indiceAtual = 0;

setInterval(() => {
    indiceAtual = (indiceAtual + 1) % anuncios.length;
    document.getElementById('slider-img').src = anuncios[indiceAtual];
}, 3000); // Muda o anúncio a cada 3 segundos

// Simulação de envio de feedback
document.getElementById('feedback-form').addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = document.getElementById('feedback').value;
    if (feedback) {
        alert('Obrigado pelo feedback!');
        document.getElementById('feedback').value = '';  // Limpa o campo
    } else {
        alert('Por favor, insira seu feedback antes de enviar.');
    }
});
