//BTN FOCO | Curto | Longo ( troca de cores de fundo )

const html = document.querySelector('html')
const botaoIniciar = document.querySelector('.app__card-primary-button');
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

// timer

const displayTempo = document.querySelector('#timer');
const banner = document.querySelector('.app__image')
const titulo = document.querySelector ('.app__title');

// Cronometro 

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 500; 
const duracaoDescansoLongo = 1000; 

//botões

botaoIniciar.addEventListener('click',() => {
    html.setAttribute('start-pause', 'app__card-primary-button')
    
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')

})

function alterarContexto (contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`imagens/${contexto}.png`)
    titulo.setAttribute('descanso-curto')
}


// Cronometro 

document.querySelector('html');
document.querySelector('.app__card-primary-button');
document.querySelector('#timer');
document.querySelector('.app__image');
document.querySelector('.app__title');

// segundo exercisio 

