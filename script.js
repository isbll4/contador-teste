let numero = 0

function adicionar(value) {
  const newNumber = numero + value;

  // Prevent number from going below 0

  if (newNumber > 10) {
    numero = 10;
    alert("The limit is 10!");
  } else {
    numero = newNumber;
  }

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