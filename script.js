var numero = 0;

var bottone = document.getElementById("aumenta");

bottone.addEventListener("click", function () {
  numero++;
  document.getElementById("numero").innerHTML = numero;
});

var bottone = document.getElementById("diminuisci");

bottone.addEventListener("click", function () {
  if (numero > 0) {
    numero--;
    document.getElementById("numero").innerHTML = numero;
  } else {
    alert("Impossibile ");
  }
});
