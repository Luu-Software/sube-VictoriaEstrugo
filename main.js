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

 let reg;
 let km;

 reg = registrada.value;
 km = distancia.value;
 let precio;

 if (reg === "si"){
  if (km > 0 && km < 3){
    precio = "$ 715-24":
  }
  else if (km > 3 && km < 6) {
    precio = "794.74"
  }
 }

});