function setupCasa() {
  document.getElementById('btnDormir').addEventListener('click', dormir);

  document.getElementById('btnBanho').addEventListener('click', () => {
    higiene = Math.min(100, higiene + 30);
  });

  document.getElementById('btnSair').addEventListener('click', () => {
  document.getElementById('casa').style.display = 'none'; // Esconde o card da casa
  mostrarMapa(); // Mostra o mapa
});
}

function dormir() {
  if (energia >= 100) {
    alert("Você já está descansado.");
    return;
  }

  energia = Math.min(100, energia + 50); // Recupera até 50 de energia
  fome = Math.min(100, fome - 30);       // Dormir dá fome
  sede = Math.min(100, sede - 40);       // E sede

  // Avança 6 horas
  if (typeof avancarTempo === "function") {
    avancarTempo(6);
  }

  if (typeof atualizarStatus === "function") {
    atualizarStatus();
  }

  alert("Você dormiu e se sente mais descansado.");
}

function avancarTempo(horas) {
  if (!currentDate) currentDate = new Date();

  const diaAntes = currentDate.getDate(); // dia atual antes da mudança

  currentDate.setHours(currentDate.getHours() + horas); // avança o tempo

  const diaDepois = currentDate.getDate();
  if (diaDepois !== diaAntes) {
    if (typeof resetarTrabalhos === "function") {
      resetarTrabalhos(); // reseta limite de trabalhos ao virar o dia
    }
  }

  if (typeof atualizarRelogio === "function") {
    atualizarRelogio(); // atualiza o relógio na tela
  } else if (typeof updateClock === "function") {
    updateClock(); // fallback se usar updateClock como nome
  }
}