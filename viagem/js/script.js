const distancia = document.querySelector('#distancia')
const consumo = document.querySelector('#consumo')
const preco = document.querySelector('#preco')
const botao = document.querySelector('#botao')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')
const resultado3 = document.querySelector('#resultado3')

botao.addEventListener('click', viagem)

function viagem(){
    const d = Number(distancia.value)
    const c = Number(consumo.value)
    const p = Number(preco.value)

    const calculo = (d / c) * p

    const valorConsumo = Number(consumo.value)

    if (valorConsumo >= 10) {
        resultado1.className = ''
        resultado1.textContent = ` O valor gasto é: R$ ${calculo.toFixed(2)}.`
    } else {
        resultado1.className = ''
        resultado1.textContent = ` O valor gasto é: R$ ${calculo.toFixed(2)}.`
    }
}