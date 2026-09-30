const capa = document.querySelector('#capa')
const sinopse = document.querySelector('#sinopse')
const bt1 = document.querySelector('#bt1')
const bt2 = document.querySelector('#bt2')
const bt3 = document.querySelector('#bt3')
const bt4 = document.querySelector('#bt4')

bt1.addEventListener('click', batman)
bt2.addEventListener('click', capitaoamerica)
bt3.addEventListener('click', homemaranha)
bt4.addEventListener('click', punisher)

// AÇÕES

function batman(){
    capa.src = 'imagens/batman.webp'
    sinopse.textContent = `Batman é o alter ego de Bruce Wayne, um bilionário órfão que, após testemunhar o assassinato de seus pais quando criança, jura vingança e consagra sua vida a combater o crime na corrupta e sombria Gotham City. Sem superpoderes sobre-humanos, o "Cavaleiro das Trevas" confia em seu intelecto genial, treinamento físico rigoroso, domínio das artes marciais e um vasto arsenal de alta tecnologia para instilar o medo no submundo criminoso. Agindo nas sombras como o maior detetive do mundo, ele enfrenta vilões icônicos enquanto luta para manter sua própria sanidade e proteger os inocentes.`
}

function capitaoamerica(){
    capa.src = 'imagens/capitão america.jpg'
    sinopse.textContent = `O Capitão América é o alter ego de Steve Rogers, um jovem franzino e rejeitado pelo exército que se transforma no primeiro supersoldado do mundo após receber o Soro do Supersoldado durante a Segunda Guerra Mundial. Vestindo as cores da bandeira americana e empunhando seu indestrutível escudo de vibranium, ele se tornou o maior símbolo de liberdade e justiça na luta contra as forças tirânicas da Hidra e do Eixo. Após ficar congelado por décadas em animação suspensa, Rogers desperta no mundo moderno, onde assume a liderança dos Vingadores e continua sua batalha incansável para proteger a humanidade, adaptando seus valores atemporais a uma nova era de ameaças complexas.`
}

function homemaranha(){
    capa.src = 'imagens/Spider-Man_Brand_New_Day_poster.jpg'
    sinopse.textContent = `O Homem-Aranha é o alter ego de Peter Parker, um jovem estudante brilhante, mas socialmente desajeitado, que ganha reflexos sobre-humanos, agilidade e a capacidade de escalar paredes após ser picado por uma aranha radioativa. Inicialmente motivado pelo ganho pessoal, sua vida muda tragicamente quando sua negligência resulta na morte de seu amado Tio Ben.`
}

function punisher(){
    capa.src = 'imagens/pantera negra.jpg'
    sinopse.textContent = `Pantera Negra:

O Pantera Negra é o alter ego de T'Challa, rei e protetor da avançada e oculta nação africana de Wakanda. Após a morte do seu pai, T'Challa assume o trono e o manto sagrado do herói, utilizando sentidos aguçados, força aprimorada pela Erva Coração e um traje tecnológico feito de vibranium. Liderando com honra e sabedoria, ele divide-se entre proteger os segredos do seu povo e combater ameaças globais, provando que um verdadeiro rei luta na linha da frente pela justiça e pela soberania da sua pátria.`
}