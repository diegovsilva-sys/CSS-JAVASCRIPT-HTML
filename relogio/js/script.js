function Relogio() {

    const agora = new Date();
    
    horas = agora.getHours();
    minutos = agora.getMinutes();
    segundos = agora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    
    document.getElementById('horas').textContent = horas
    document.getElementById('minutos').textContent = minutos
    document.getElementById('segundos').textContent = segundos
}

Relogio();

setInterval(Relogio, 1000);
