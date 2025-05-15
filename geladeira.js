let inventario = {
  agua: 5,
  sanduiche: 5,
};

function setupGeladeira() {
  renderizarGeladeira();
}

function renderizarGeladeira() {
  const container = document.getElementById("itensGeladeira");
  container.innerHTML = "";

  for (let item in inventario) {
    if (inventario[item] > 0) {
      const btn = document.createElement("button");
      btn.innerText = `${item} (${inventario[item]})`;
      btn.onclick = () => consumirItem(item);
      container.appendChild(btn);
    }
  }
}

function consumirItem(item) {
  if (inventario[item] <= 0) return;

  if (item === "agua") {
    sede = Math.min(100, sede + 30);
  } else if (item === "sanduiche") {
    fome = Math.min(100, fome + 30);
  }

  inventario[item]--;
  renderizarGeladeira();
}

// NOVA FUNÇÃO para adicionar itens à geladeira
function adicionarItemGeladeira(item, quantidade) {
  if (!inventario[item]) {
    inventario[item] = 0;
  }
  inventario[item] += quantidade;
  renderizarGeladeira();
}