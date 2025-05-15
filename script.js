// script.js

// Data e Hora Inicial
let currentDate = new Date(2025, 0, 1, 6, 0);

// Status vitais
let sede = 100;
let fome = 100;
let energia = 100;
let higiene = 100;
let mental = 100;
let dinheiro = 500;

// Atualiza o relógio e os status vitais
function updateClock() {
  currentDate.setMinutes(currentDate.getMinutes() + 10);

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  const time = currentDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  const date = currentDate.toLocaleDateString('pt-BR', options);

  document.getElementById('clock').innerText = `Data: ${date} - ${time}`;
  updateStatus();
}

// Atualiza os status vitais a cada tick
function updateStatus() {
  fome = Math.max(0, fome - 0.3);
  energia = Math.max(0, energia - 0.4);
  higiene = Math.max(0, higiene - 0.2);
  mental = Math.max(0, mental - 0.2);
  sede = Math.max(0, sede - 0.5);

  document.getElementById('sede').innerText = Math.round(sede);
  document.getElementById('fome').innerText = Math.round(fome);
  document.getElementById('energia').innerText = Math.round(energia);
  document.getElementById('higiene').innerText = Math.round(higiene);
  document.getElementById('mental').innerText = Math.round(mental);
}

// Inicia o jogo
function startGame() {
  document.getElementById('startScreen').style.display = 'none';
  document.getElementById('gameUI').style.display = 'block';

  // Botão "Empregos"
  const btnEmpregos = document.getElementById("btnEmpregos");
  if (btnEmpregos) {
    btnEmpregos.onclick = mostrarEmpregos;
  }
  
  function avancarTempo(horas) {
  if (!currentDate) currentDate = new Date();

  const diaAnterior = currentDate.getDate(); // Guarda o dia antes da mudança
  currentDate.setHours(currentDate.getHours() + horas);

  // Se o dia mudou, resetar trabalhos
  const novoDia = currentDate.getDate();
  if (novoDia !== diaAnterior) {
    if (typeof resetarTrabalhos === "function") {
      resetarTrabalhos();
    }
  }

  atualizarRelogio(); // Atualiza a interface do relógio
}

  setInterval(updateClock, 1000);

  // Inicializações dos sistemas
  setupCasa();
  setupGeladeira();
  setupMapa();
  setupTrabalho();
  setupMercado();
}