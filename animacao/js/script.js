//DOM

const bola = document.getElementById('caixa');

//Função para animar a bola
function animar(evento) {
    
    if(evento.key === 'ArrowUp') {
        bola.classList.add('bolaPular')
    }
    if(evento.key === 'ArrowDown') {
        bola.classList.remove('bolaPular')
    }
}



