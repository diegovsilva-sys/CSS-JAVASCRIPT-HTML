const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const botao = document.querySelector('#botao');
const resultado1 = document.querySelector('#resultado1');

botao.addEventListener('click', calcularResultado);

function calcularResultado() {
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    const media = (n1 + n2 + n3) / 3;

    if (media >= 5) {
        resultado1.className = 'aprovado';
        resultado1.textContent = `🎉 A sua média é: ${media.toFixed(2)}. Você foi Aprovado! 🥳`;
    } else {
        resultado1.className = 'reprovado';
        resultado1.textContent = `❌ A sua média é: ${media.toFixed(2)}. Você foi Reprovado! 💔`;
    }
}