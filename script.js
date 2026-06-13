function validarAcesso() {

    let nome = document.getElementById("nomeOperador").value;
    let mensagem = document.getElementById("mensagem");

    if(nome === ""){

        mensagem.innerText = "Digite o nome do operador!";

    }else{

        mensagem.innerText = "Acesso liberado!";
        mensagem.style.color = "lime";

        document.getElementById("painel")
        .classList.remove("d-none");

        gerarListaMaquinas();
    }
}

function gerarListaMaquinas(){

    const select =
    document.getElementById("listaMaquinas");

    if(select.options.length > 0){
        return;
    }

    for(let i=1; i<=5; i++){

        let option =
        document.createElement("option");

        option.value = i;
        option.text =
        "Máquina " + i;

        select.appendChild(option);
    }
}

function verificarStatus(){

    const maquina =
    document.getElementById("listaMaquinas").value;

    const status =
    document.getElementById("statusMaquina");

    switch(maquina){

        case "1":
            status.innerText = "Em operação";
            break;

        case "2":
            status.innerText = "Manutenção necessária";
            break;

        case "3":
            status.innerText = "Desligada";
            break;

        case "4":
            status.innerText = "Operando normalmente";
            break;

        case "5":
            status.innerText = "Aguardando produção";
            break;
    }
}

function monitorarSensor(){

    let temperatura =
    Math.floor(Math.random() * 101);

    let visor =
    document.getElementById("temperatura");

    let situacao =
    document.getElementById("situacao");

    visor.innerText =
    temperatura + "°C";

    situacao.className = "badge";

    if(temperatura < 50){

        situacao.innerText = "Normal";
        situacao.classList.add("normal");

    }else if(temperatura <= 80){

        situacao.innerText = "Alerta";
        situacao.classList.add("alerta");

    }else{

        situacao.innerText =
        "PERIGO - SUPERAQUECIMENTO";

        situacao.classList.add("perigo");
    }
}

setInterval(monitorarSensor, 3000);
monitorarSensor();