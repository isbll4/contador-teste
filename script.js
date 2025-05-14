// Estado da Aplicação
let numero = 0

// variaveis da Aplicação

function aumentar() {
    numero++
    update()

}

function anular() {
    numero = 0
    update()

}

function diminuir() {
    numero--
    update()

}

// Atualizar estado da aplicação
 
function update() {
    const p = document.querySelector('#resultado')
    // jeito errado.
    // p.innerText = numero
    p.innerText = numero.toString() 


}

// iniciar
update()
