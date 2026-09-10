function atualizarPainel() {
    let dataAtual = new Date();

    let hora = dataAtual.getHours();
    let minuto = dataAtual.getMinutes();
    let segundo = dataAtual.getSeconds();

    let dia = dataAtual.getDate();
    let mes = dataAtual.getMonth() + 1;
    let ano = dataAtual.getFullYear();

    let horaStr = hora;
    if (hora < 10) { horaStr = "0" + hora; }

    let minStr = minuto;
    if (minuto < 10) { minStr = "0" + minuto; }

    let segStr = segundo;
    if (segundo < 10) { segStr = "0" + segundo; }

    let diaStr = dia;
    if (dia < 10) { diaStr = "0" + dia; }

    let mesStr = mes;
    if (mes < 10) { mesStr = "0" + mes; }

    let anoStr = ano;

    let elHora = document.querySelector("#hora-completa");
    let elData = document.querySelector("#data-completa");
    let elDia = document.querySelector("#box-dia");
    let elMes = document.querySelector("#box-mes");
    let elAno = document.querySelector("#box-ano");
    let elSaudacao = document.querySelector("#saudacao");

    if (elHora) { elHora.textContent = horaStr + ":" + minStr + ":" + segStr; }
    if (elData) { elData.textContent = diaStr + "/" + mesStr + "/" + anoStr; }
    if (elDia) { elDia.textContent = diaStr; }
    if (elMes) { elMes.textContent = mesStr; }
    if (elAno) { elAno.textContent = anoStr; }

    if (elSaudacao) {
        if (hora >= 0 && hora < 12) {
            elSaudacao.textContent = "☀️ BOM DIA!";
        } else if (hora >= 12 && hora < 18) {
            elSaudacao.textContent = "☀️ BOA TARDE!";
        } else {
            elSaudacao.textContent = "🌙 BOA NOITE!";
        }
    }
}

atualizarPainel();
setInterval(atualizarPainel, 1000);