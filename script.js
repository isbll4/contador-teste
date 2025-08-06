let numero = 0

function adicionar(valor) {
  numero += valor
  update()
}

function anular() {
  numero = 0
  update()
}

function update() {
  const p = document.querySelector('#resultado')

  p.innerText = numero.toString()

  // const titulo = document.querySelector('#titulo-resultado')
  // titulo.innerText = "Contador " + numero
}

update()