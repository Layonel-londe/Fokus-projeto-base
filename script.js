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
    titulo.setAttribute('titulo', titulo);
    
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')

})

function alterarContexto (contexto) {
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src',`imagens/${contexto}.png`)
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;     
    }
}


// Cronometro 

document.querySelector('html');
document.querySelector('.app__card-primary-button');
document.querySelector('#timer');
document.querySelector('.app__image');
document.querySelector('.app__title');

// segundo exercisio 

