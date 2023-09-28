function parImpar(numero) { //funcion que determina si el numero ingresado es par o impar
  if (numero % 2 === 0) {
    return "es par"; // arroja el mensaje "es par si el numero ingresado divido en 2 da 0"
  } else {
    return "es impar"; // arroja el mensaje "es impar si el numero ingresado divido en 2 da distinto a 0"
  }
}  
let numeroPar = 0; // declaro la variable numeroPar con valor 0
let numeroImpar = 0; // declaro la variable numeroImpar con valor 0

for (let i = 1; i <= 5; i++) { // creo un bucle que pida al usuario 5 numeros
  let numero = parseInt(prompt("Ingrese un numero")); // le pedimos al usuario un numero
  let mensaje = parImpar(numero); // guardamos en la variable mensaje el resultado que nos arroja la funcion


  if (mensaje === "es par") {
    numeroPar++; // incremento de uno en uno el valor de la variable si la funcion da el mensaje "es par"
  } else {
    numeroImpar++; // incremento de uno en uno el valor de la variable si la funcion no da el mensaje "es par"
  }

  alert(`El numero ${numero} ${mensaje}`);
  alert(`Llevas un total de ${numeroPar} pares y ${numeroImpar} impares`);
}



