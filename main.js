/*
ACTUALIZADO A ABRIL DEL 2026

Distancia	  | Con SUBE registrada   | Con SUBE sin registrar
0-3 km	    | $ 715.24	            | $ 1137.23
3-6 km	    | $ 794.74		          | $ 1263.64
6-12 km	    | $ 855.97		          | $ 1360.99
12-27 km	  | $ 917.24		          | $ 1458.41
*/

boton.addEventListener("click", function () {

 let reg;
 let km;
 let lugar;
 let precio;

 reg = registrada.value;
 km = distancia.value;
lugar = colectivo.value;

 if (lugar === "buenos aires"){
 if (reg === "si"){
  if (km > 0 && km < 3){
    precio = "$ 715.24";
  }
  else if (km > 3 && km < 6) {
    precio = "794.74"
  }
  else if (km > 6 && km < 12) {
    precio = "855.97"
  } 
  else if (km > 12 && km < 27) {
    precio = "917.24"
  }
  else {
    precio = "error"
  }
  }

  if (reg === "no") {
    if (km > 0 && km < 3) {
      precio = "1137.23"
  }
  else if (km > 3 && km < 6) {
    precio = "1263.64"
    }
    else if (km > 6 && km < 12) {
      precio = "1360.99"
    }
    else if (km > 12 && km <= 27) {
      precio = "1458.41"
    }
    else {
      precio = "error"
    }
  }
  }
  if (lugar === "provincia"){
    if (reg === "si"){
     if (km > 0 && km < 3){
       precio = "$ 715.24";
     }
     else if (km > 3 && km < 6) {
       precio = "794.74"
     }
     else if (km > 6 && km < 12) {
       precio = "855.97"
     } 
     else if (km > 12 && km < 27) {
       precio = "917.24"
     }
     else {
       precio = "error"
     }
     }
   
     if (reg === "no") {
       if (km > 0 && km < 3) {
         precio = "1137.23"
     }
     else if (km > 3 && km < 6) {
       precio = "1263.64"
       }
       else if (km > 6 && km < 12) {
         precio = "1360.99"
       }
       else if (km > 12 && km <= 27) {
         precio = "1458.41"
       }
       else {
         precio = "error"
       }
     }
     }
   
     if (lugar === "nacional"){
      if (reg === "si"){
       if (km > 0 && km < 3){
         precio = "$ 715.24";
       }
       else if (km > 3 && km < 6) {
         precio = "794.74"
       }
       else if (km > 6 && km < 12) {
         precio = "855.97"
       } 
       else if (km > 12 && km < 27) {
         precio = "917.24"
       }
       else {
         precio = "error"
       }
       }
     
       if (reg === "no") {
         if (km > 0 && km < 3) {
           precio = "1137.23"
       }
       else if (km > 3 && km < 6) {
         precio = "1263.64"
         }
         else if (km > 6 && km < 12) {
           precio = "1360.99"
         }
         else if (km > 12 && km <= 27) {
           precio = "1458.41"
         }
         else {
           precio = "error"
         }
       }
       }
     

tarifa.innerText = precio
});