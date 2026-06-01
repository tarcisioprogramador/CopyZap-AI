let dados = [];

function salvar() {
    localStorage.setItem("dados", JSON.stringify(dados));
}

function carregar() {
    dados = JSON.parse(localStorage.getItem("dados")) || [];
}

function adicionar() {
    const desc = document.getElementById("desc").value;
    const valor = Number(document.getElementById("valor").value);
    const tipo = document.getElementById("tipo").value;

    dados.push({ desc, valor, tipo });

    salvar();
    atualizar();
}

function atualizar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    let saldo = 0;
    let entrada = 0;
    let saida = 0;

    dados.forEach(d => {
        const li = document.createElement("li");
        li.textContent = `${d.desc} - R$ ${d.valor} (${d.tipo})`;
        lista.appendChild(li);

        if (d.tipo === "entrada") {
            saldo += d.valor;
            entrada += d.valor;
        } else {
            saldo -= d.valor;
            saida += d.valor;
        }
    });

    document.getElementById("saldo").textContent = saldo;

    desenharGrafico(entrada, saida);
}

function desenharGrafico(entrada, saida) {
    const ctx = document.getElementById("grafico");

    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Entradas', 'Saídas'],
            datasets: [{
                data: [entrada, saida]
            }]
        }
    });
}

carregar();
atualizar();