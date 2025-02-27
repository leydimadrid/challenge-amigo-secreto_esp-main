const input = document.getElementById("amigo");
const listAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

let amigos = [];

function agregarAmigo() {
  if (input.value == "") {
    alert("Por favor, inserte un nombre.");
  } else if (input.value) {
    amigos.push(input.value);
    input.value = "";
    listaAmigos();
  }
}

function listaAmigos() {
  listAmigos.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    listAmigos.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("No hay amigos para sortear.");
  } else {
    let amigoRandom = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `El amigo elegido es: ${amigos[amigoRandom]}`;
  }
}
