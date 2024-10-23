let gols = 0;

document.getElementById('clickCounterBtn').addEventListener('click', function() {
    gols++;
    document.getElementById('counter').textContent = "Gols: " + gols;
});

const jogador = document.getElementById('textToToggle');
const toggleBtn = document.getElementById('toggleTextBtn');

toggleBtn.addEventListener('click', function() {
    if (jogador.style.display === 'none') {
        jogador.style.display = 'block';
        toggleBtn.textContent = 'Esconder Jogador';
    } else {
        jogador.style.display = 'none';
        toggleBtn.textContent = 'Mostrar Jogador';
    }
});
