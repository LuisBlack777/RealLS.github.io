// banco.js

let saldoBanco = 0;

function depositarNoBanco(valor) {
  saldoBanco += valor;
  console.log("Depósito realizado: R$", valor, "- Novo saldo:", saldoBanco);
  atualizarBancoUI();
}

function sacarDoBanco(valor) {
  if (valor <= saldoBanco) {
    saldoBanco -= valor;
    dinheiro += valor;
    atualizarBancoUI();
    atualizarStatus();
  } else {
    alert("Saldo insuficiente no banco.");
  }
}

function atualizarBancoUI() {
  const bancoUI = document.getElementById("bancoInfo");
  if (bancoUI) {
    bancoUI.textContent = `Saldo no Banco: R$ ${saldoBanco.toFixed(2)}`;
  }
}