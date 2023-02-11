var diapositivas1 = document.querySelectorAll(".diapositiva_carrucel1");
var diapositivas2 = document.querySelectorAll(".diapositiva_carrucel2");
var indiceActual1 = 0;
var indiceActual2 = 0;

function mostrarDiapositiva1(n) {
  diapositivas1[indiceActual1].style.display = "none";
  indiceActual1 = (n + diapositivas1.length) % diapositivas1.length;
  diapositivas1[indiceActual1].style.display = "block";
}

document.querySelector(".boton1-siguiente").addEventListener("click", function() {
  mostrarDiapositiva1(indiceActual1 + 1);
});

document.querySelector(".boton1-anterior").addEventListener("click", function() {
  mostrarDiapositiva1(indiceActual1 - 1);
});


function mostrarDiapositiva2(n) {
  diapositivas2[indiceActual2].style.display = "none";
  indiceActual2 = (n + diapositivas2.length) % diapositivas2.length;
  diapositivas2[indiceActual2].style.display = "block";
}

document.querySelector(".boton2-siguiente").addEventListener("click", function() {
  mostrarDiapositiva2(indiceActual2 + 1);
});

document.querySelector(".boton2-anterior").addEventListener("click", function() {
  mostrarDiapositiva2(indiceActual2 - 1);
});