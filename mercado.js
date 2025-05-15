function setupMercado() {
  document.getElementById("quantAgua").addEventListener("input", atualizarTotal);
  document.getElementById("quantSanduiche").addEventListener("input", atualizarTotal);
  document.getElementById("btnComprar").addEventListener("click", comprarItens);
}

function mostrarMercado() {
  document.getElementById("mapa").style.display = "none";
  document.getElementById("mercado").style.display = "block";
  atualizarTotal();
}

function atualizarTotal() {
  const agua = parseInt(document.getElementById("quantAgua").value) || 0;
  const sanduiche = parseInt(document.getElementById("quantSanduiche").value) || 0;
  const total = agua * 10 + sanduiche * 20;
  document.getElementById("totalCompra").textContent = `Total: R$ ${total}`;
}

function comprarItens() {
  const agua = parseInt(document.getElementById("quantAgua").value) || 0;
  const sanduiche = parseInt(document.getElementById("quantSanduiche").value) || 0;
  const total = agua * 10 + sanduiche * 20;

  if (saldoBanco < total) {
    alert("Saldo insuficiente no banco.");
    return;
  }

  saldoBanco -= total;
  adicionarItemGeladeira("agua", agua);
  adicionarItemGeladeira("sanduiche", sanduiche);

  alert("Compra realizada com sucesso!");
  document.getElementById("quantAgua").value = 0;
  document.getElementById("quantSanduiche").value = 0;
  atualizarTotal();
  atualizarBancoUI(); // Corrigido!
}

function sairDoMercado() {
  document.getElementById("mercado").style.display = "none";
  mostrarMapa();
}