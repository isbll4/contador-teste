let numero = 0

function adicionar(value) {
  const newNumber = numero + value;

  numero = newNumber

  render()
}

function anular() {
  numero = 0;
  
  render();
}

function render(){
  const p = document.querySelector("#resultado")

  p.innerText = numero
}

console.log(numero)
render()