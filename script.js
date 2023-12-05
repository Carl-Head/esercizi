function aggiungi() {
  let prevcounter = parseInt(document.getElementById("numero").innerHTML);
  let inputvalue = parseInt(document.getElementById("input").value);
  let total = prevcounter + inputvalue;
  if (numero > 0) {
    document.getElementById("numero").classList.remove("color-red");
  }
  document.getElementById("numero").innerText = total;
  document.getElementById("input").value = "";
}

function sottrazione() {
  let prevcounter = parseInt(document.getElementById("numero").innerHTML);
  let inputvalue = parseInt(document.getElementById("input").value);
  let total = prevcounter - inputvalue;
  if (numero < 0) {
    document.getElementById("numero").classList.add("color-red");
  }
  document.getElementById("numero").innerText = total;
  document.getElementById("input").value = "";
}

document.getElementById("aumenta").addEventListener("click", aggiungi);

document.getElementById("diminuisci").addEventListener("click", sottrazione);
