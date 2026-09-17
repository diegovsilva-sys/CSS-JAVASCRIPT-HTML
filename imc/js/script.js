const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const botao = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

botao.addEventListener('click', imc)

function imc(){
    p = Number(peso.value)
    a = Number(altura.value)
    calculo = p/(a*a)

    resultado1.textContent = `O seu IMC é ${calculo.toFixed(2)}`


    if(calculo<18.5){
    resultado2.textContent = `Você é Magro!`

    }else if(calculo >=18.5 && calculo<25){
    resultado2.textContent = `Você está com o Peso Ideal!`

    }else if(calculo >=25 && calculo<30){
    resultado2.textContent = `Você está com Sobrepeso!`

    }else{
    resultado2.textContent = `Você está com Obesidade`
    }
}

