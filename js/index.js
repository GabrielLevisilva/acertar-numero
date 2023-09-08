const btnVerificar = document.querySelector('.btn')
let chances = 10
btnVerificar.addEventListener('click', verificar)


let numerosDitos = []



// Gerar um número aleatório entre 1 e 100 (inclusive)
var numeroSecreto = Math.floor(Math.random() * 100) + 1;

console.log(numeroSecreto);


const palpitesAnteriores = document.querySelector('.palpites-anteriores')
const casoErre = document.querySelector('.caso-erre')
const contadorChances = document.querySelector('.contador-chances')



function verificar(){

    const numTxt = document.querySelector('#numtxt')
    let num = Number(numTxt.value)
    if(numerosDitos.indexOf(num) !== -1){
        alert('você já escolheu esse numero')
    }
    else{

        if(num < 1 || num > 100){
            alert('ERRO digite um número entre 1 e 100')
        }
        else{
            if(num == numeroSecreto){
                numeroSecretoAcertado()
            }
            else if(num < numeroSecreto){
                chances--
                numerosDitos.push(num)
                casoErre.innerHTML = `ERROU, ${num} é um número muito BAIXO`

            }
            else if(num > numeroSecreto){
                chances--
                numerosDitos.push(num)
                casoErre.innerHTML = `ERROU, ${num} é um número muito ALTO`

                
            }
            let palpitePassado = document.createElement('p')
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
const localNumCerto = document.querySelector('.num-certo')
localNumCerto.innerHTML = numeroSecreto


function chancesAcabaram(){
    alert('suas chances acabaram')
    main.style.display = 'none'
}

function numeroSecretoAcertado(){
    main.style.display = 'none'
    ganhou.style.display = 'block'

}

