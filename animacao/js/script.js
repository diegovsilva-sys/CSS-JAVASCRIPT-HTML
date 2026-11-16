//Função

function animar(evento){

    if(evento.key == ''){
    bola.classList.add('bolaPular')
    }

    if(evento.key == 'ArrowDown'){
    bola.classList.remove('bolaPular')
    }

    if(evento.key == 'ArrowRight'){
    posicao = posicao+10
    bola.style.left = posicao + "px"
    }

    if(evento.key == 'ArrowLeft'){
    posicao = posicao-10
    bola.style.left = posicao + "px"
    }
}
