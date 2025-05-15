function setupMapa() {
  const mapa = document.getElementById("mapa");
  mapa.innerHTML = ""; // Limpa caso reinicie

  const tiles = {
    casa: { nome: "Casa", icone: "fa-home" },
    mercado: { nome: "Mercado", icone: "fa-shopping-cart" },
    trabalho: { nome: "Trabalho", icone: "fa-briefcase" },
    farmacia: { nome: "Farmácia", icone: "fa-prescription-bottle" },
    vazio: { nome: "", icone: "" }
  };

  const layout = [
    "mercado", "vazio", "trabalho",
    "vazio", "casa", "vazio",
    "vazio", "farmacia", "vazio",
  ];

  layout.forEach((tipo) => {
    const tile = document.createElement("div");
    tile.className = `tile ${tipo}`;

    if (tipo !== "vazio") {
      tile.innerHTML = `
        <i class="fas ${tiles[tipo].icone}"></i>
        <span>${tiles[tipo].nome}</span>
      `;
      tile.onclick = () => clicarLocal(tipo);
    }

    // Marcar posição inicial do jogador (em casa)
    if (tipo === "casa") {
      tile.classList.add("jogador");
    }

    mapa.appendChild(tile);
  });
}

function clicarLocal(local) {
  switch (local) {
    case "trabalho":
      if (empregoSelecionado) {
        trabalhar(empregoSelecionado);
      } else {
        alert("Você precisa selecionar um emprego primeiro!");
      }
      break;

    case "mercado":
      mostrarMercado();
      break;

    case "casa":
      entrarEmCasa();
      break;

    default:
      alert(`Você foi para: ${local}`);
  }
}

function mostrarMapa() {
  document.getElementById("mapa").style.display = "grid";
  document.getElementById("casa").style.display = "none";
  document.getElementById("gameUI").style.display = "block";
}

function entrarEmCasa() {
  document.getElementById("mapa").style.display = "none";
  document.getElementById("casa").style.display = "block";
  document.getElementById("gameUI").style.display = "block";
  alert("Você voltou para casa.");
}