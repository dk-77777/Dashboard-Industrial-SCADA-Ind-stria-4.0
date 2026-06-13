function validarAcesso() {
    let nome = document.getElementById("nomeOperador").value;
    let mensagem = document.getElementById("mensagem");

    if (nome === "") {
        mensagem.textContent = "Digite o nome do operador!";
    } else {
        mensagem.textContent = "";
        document.getElementById("painel").style.display = "block";
        gerarListaMaquinas();
    }
}

function gerarListaMaquinas() {
    let select = document.getElementById("maquinas");

    if (select.options.length > 1) return;

    for (let i = 1; i <= 5; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = "Máquina " + i;
        select.appendChild(option);
    }
}

function verificarStatus() {
    let maquina = document.getElementById("maquinas").value;
    let status = document.getElementById("statusMaquina");

    switch (maquina) {
        case "1":
            status.textContent = "Em operação";
            break;
        case "2":
            status.textContent = "Manutenção necessária";
            break;
        case "3":
            status.textContent = "Desligada";
            break;
        case "4":
            status.textContent = "Operando normalmente";
            break;
        case "5":
            status.textContent = "Aguardando produção";
            break;
        default:
            status.textContent = "";
    }
}

function monitorarSensor() {
    let temperatura = Math.floor(Math.random() * 101);

    let visor = document.getElementById("temperatura");
    let situacao = document.getElementById("situacao");

    visor.textContent = temperatura + "°C";

    situacao.className = "";

    if (temperatura < 50) {
        situacao.textContent = "Normal";
        situacao.classList.add("normal");
    }
    else if (temperatura <= 80) {
        situacao.textContent = "Alerta";
        situacao.classList.add("alerta");
    }
    else {
        situacao.textContent = "PERIGO - SUPERAQUECIMENTO";
        situacao.classList.add("perigo");
    }
}

setInterval(monitorarSensor, 3000);
monitorarSensor();