/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/
let boton = document.getElementById("boton");

boton.addEventListener("click", function () {

  // Variables
  let registrada = registrada. value;
  let distancia = distancia. value;
  let tarifa = tarifa;

  let km = Number(distancia);
  let precio = 0;

  // Condicionales
  if (km <= 3) {

    if (registrada === "si") {
      precio = 715.24;
    } else if (registrada === "no") {
      precio = 1137.23;
    }

  } else if (km <= 6) {

    if (registrada === "si") {
      precio = 794.74;
    } else if (registrada === "no") {
      precio = 1263.64;
    }

  } else if (km <= 12) {

    if (registrada === "si") {
      precio = 855.97;
    } else if (registrada === "no") {
      precio = 1360.99;
    }

  } else if (km <= 27) {

    if (registrada === "si") {
      precio = 917.24;
    } else if (registrada === "no") {
      precio = 1458.41;
    }

  } else {
    precio = 0;
  }

  // Resultado
  tarifa.innerText = "El boleto cuesta $" + precio;

});