let numero = 0
let step = 1;

const input = document.querySelector("#stepValue");

input.addEventListener("change", (event) => {
  step = parseInt(event.target.value);
});

function adicionar(value) {
  const newNumber = numero + step;

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
  step = 1;
  
  render();
}

function render(){
  const p = document.querySelector("#resultado")

  p.innerText = numero
}

console.log(numero)
render()