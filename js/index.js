
let numerosDitos = []


jogar()

function jogar(){

    const btnVerificar = document.querySelector('.btn')
    btnVerificar.addEventListener('click', verificar)
let chances = 10

// Gerar um número aleatório entre 1 e 100 (inclusive)
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log(numeroSecreto);


const palpitesAnteriores = document.querySelector('.palpites-anteriores')
const casoErre = document.querySelector('.caso-erre')
const contadorChances = document.querySelector('.chances')
const numTxt = document.querySelector('#numtxt')
numTxt.focus()



function verificar(){

   
    let num = Number(numTxt.value)
    if(numerosDitos.indexOf(num) !== -1){
        alert('você já escolheu esse numero')
    }
    else{
        let palpitePassado = document.createElement('p')

        if(num < 1 || num > 100){
            alert('ERRO digite um número entre 1 e 100')
        }
        else if(num >= 1 && num <= 100 ){
            if(num == numeroSecreto){
                numeroSecretoAcertado()
            }
            else if(num < numeroSecreto){
                chances--
                numerosDitos.push(num)
                casoErre.innerHTML = `ERROU, ${num} é um número muito BAIXO`
                palpitePassado.style.color = 'red'
                
            }
            else if(num > numeroSecreto){
                chances--
                numerosDitos.push(num)
                casoErre.innerHTML = `ERROU, ${num} é um número muito ALTO`
                palpitePassado.style.color = 'blue'
            }
            
            palpitePassado.innerHTML = num

            palpitesAnteriores.appendChild(palpitePassado)
            contadorChances.innerHTML = chances

            if(chances == 0){
                chancesAcabaram()
            }
        }
    }

    numTxt.value = ''
    console.log(numerosDitos)

}

const main = document.querySelector('main')
const ganhou = document.querySelector('.ganhou')
const localNumCerto = document.querySelectorAll('.num-certo')
for(let c = 0; c< localNumCerto.length; c++){
    localNumCerto[c].innerHTML = numeroSecreto
}

const perdeu = document.querySelector('.perdeu')
const jogarNovamente = document.querySelector('.jogar-novamente')
jogarNovamente.addEventListener('click', function(){
    
    main.style.display = 'block'
    perdeu.style.display = 'none'
    palpitesAnteriores.innerHTML = ''
    chances = 10
    casoErre.innerHTML = ''
    contadorChances.innerHTML = 10
    numerosDitos = [] 
    btnVerificar.removeEventListener('click', verificar)
    jogar()
    
})

function chancesAcabaram(){
    alert('suas chances acabaram')
    main.style.display = 'none'
    perdeu.style.display = 'block'
}

function numeroSecretoAcertado(){
    main.style.display = 'none'
    ganhou.style.display = 'block'

}

}