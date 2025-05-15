// trabalhos.js

let trabalhosHoje = 0;
let empregoSelecionado = null;

const empregosDisponiveis = {
  caixa: { nome: "Caixa de Supermercado", salarioBase: 100, horario: "08:00 - 14:00", expGanha: 10 },
  vendedor: { nome: "Vendedor", salarioBase: 150, horario: "10:00 - 16:00", expGanha: 12 },
  gerente: { nome: "Gerente", salarioBase: 250, horario: "14:00 - 20:00", expGanha: 15 }
};

let experienciaTrabalho = {
  caixa: 0,
  vendedor: 0,
  gerente: 0
};

let nivelTrabalho = {
  caixa: 1,
  vendedor: 1,
  gerente: 1
};

function trabalhar() {
  if (!empregoSelecionado) {
    alert("Você precisa escolher um emprego primeiro!");
    return;
  }

  if (trabalhosHoje >= 2) {
    alert("Você já trabalhou 2 vezes hoje.");
    return;
  }

  const tipo = empregoSelecionado;
  const trabalho = empregosDisponiveis[tipo];

  if (!trabalho) {
    alert("Tipo de trabalho inválido.");
    return;
  }

  trabalhosHoje++;

  const nivel = nivelTrabalho[tipo];
  const salarioFinal = trabalho.salarioBase + (nivel - 1) * 15;

  energia = Math.max(0, energia - 30);
  fome = Math.min(100, fome + 10);
  sede = Math.min(100, sede + 10);
  higiene = Math.max(0, higiene - 20);

  depositarNoBanco(salarioFinal);
  experienciaTrabalho[tipo] += trabalho.expGanha;
  verificarNivel(tipo);

  if (typeof avancarTempo === "function") {
    avancarTempo(6);
  }

  atualizarStatus();
  atualizarExpStatus();

  alert(`Você trabalhou como ${trabalho.nome}, recebeu R$${salarioFinal} e ganhou ${trabalho.expGanha} EXP.`);
}

function verificarNivel(tipo) {
  const exp = experienciaTrabalho[tipo];
  const nivel = nivelTrabalho[tipo];
  const base = 50;
  const expNecessaria = Math.floor(base * Math.pow(nivel, 1.5));

  if (exp >= expNecessaria) {
    nivelTrabalho[tipo]++;
    alert(`Promoção! Seu nível de ${empregosDisponiveis[tipo].nome} subiu para ${nivelTrabalho[tipo]}!`);
  }
}

function setupTrabalho() {}

function resetarTrabalhos() {
  trabalhosHoje = 0;
}

function mostrarEmpregos() {
  const menu = document.getElementById("menuEmpregos");
  const lista = document.getElementById("listaEmpregos");
  lista.innerHTML = "";

  for (const tipo in empregosDisponiveis) {
    const trabalho = empregosDisponiveis[tipo];
    const nivel = nivelTrabalho[tipo];
    const exp = experienciaTrabalho[tipo];
    const base = 50;
    const expNecessaria = Math.floor(base * Math.pow(nivel, 1.5));
    const salario = trabalho.salarioBase + (nivel - 1) * 15;

    const btn = document.createElement("button");
    btn.className = "btn";
    btn.innerText = `${trabalho.nome} (R$${salario}, Horário: ${trabalho.horario}, Nível: ${nivel}, EXP: ${exp}/${expNecessaria})`;
    btn.onclick = () => {
      empregoSelecionado = tipo;
      alert(`Emprego selecionado: ${trabalho.nome}. Vá até o local de trabalho no mapa para iniciar o expediente.`);
      fecharEmpregos();
    };

    lista.appendChild(btn);
  }

  menu.style.display = "block";
  document.getElementById("mapa").style.display = "none";
}

function fecharEmpregos() {
  document.getElementById("menuEmpregos").style.display = "none";
  document.getElementById("mapa").style.display = "grid";
}

function atualizarExpStatus() {
  const lista = document.getElementById("listaExpTrabalhos");
  if (!lista) return;

  lista.innerHTML = "";

  for (const tipo in empregosDisponiveis) {
    const trabalho = empregosDisponiveis[tipo];
    const nivel = nivelTrabalho[tipo];
    const exp = experienciaTrabalho[tipo];
    const base = 50;
    const expNecessaria = Math.floor(base * Math.pow(nivel, 1.5));

    const li = document.createElement("li");
    li.innerText = `${trabalho.nome}: EXP ${exp}/${expNecessaria} | Nível ${nivel}`;
    lista.appendChild(li);
  }
}