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
$(document).ready(function() {
    // Inicializa o Owl Carousel
    $('#videoCarousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000, // Tempo entre slides em milissegundos
        autoplayHoverPause: true,
        items: 1, // Exibe um vídeo por vez
        responsive: {
            0: {
                items: 1 // Em telas pequenas, exibe 1 vídeo
            },
            600: {
                items: 1 // Em telas médias, exibe 1 vídeo
            },
            1000: {
                items: 1 // Em telas grandes, exibe 1 vídeo
            }
        }
    });

    // Função para atualizar a data e hora
    function updateDateTime() {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString('pt-BR');
        const time = currentDate.toLocaleTimeString('pt-BR');

        document.getElementById('current-date').textContent = date;
        document.getElementById('current-time').textContent = time;
    }

    // Atualiza a data e hora a cada segundo
    setInterval(updateDateTime, 1000);
    updateDateTime(); // Chama a função uma vez para inicializar
});






// Carrossel de anúncios
const anuncios = ['https://www.w3schools.com/w3images/fjords.jpg',  'https://www.w3schools.com/w3images/mountains.jpg'];
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
