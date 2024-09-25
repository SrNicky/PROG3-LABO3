
let a = 5;
let b = 10;
let c = a + b;

// Imprimir el resultado en la consola
console.log("El valor de a es:", a);
console.log("El valor de b es:", b);
console.log("La suma de a y b es: ", c);

// Pedir el nombre al usuario y almacenarlo en la variable 'nombre'
//let nombre = prompt("Por favor, ingresa tu nombre:");

// Imprimir un saludo en la consola que incluya el nombre del usuario
//console.log("¡Hola, " + nombre + "! Bienvenido/a.");

let d = 8;
let e = 12;
let f = 5;

// Encontrar el mayor de los tres números
let mayor;

switch (true) {
  case (d > e && d > f):
    mayor = d;
    break;
  case (e > d && e > f):
    mayor = e;
    break;
  case (f > d && f > e):
    mayor = f;
    break;
  default:
    mayor = "Los números son iguales o no hay un número claramente mayor";
}

// Imprimir el número mayor en la consola
//console.log("El número mayor de los 3 es:", mayor);

// Pedir al usuario que ingrese un número
//let numeroIngresado = prompt("Por favor, ingresa un número:");

// Convertir la entrada del usuario a un número entero
//numeroIngresado = parseInt(numeroIngresado);

// Verificar si el número es par o impar
//if (isNaN(numeroIngresado)) {
//  console.log("Por favor, ingresa un número válido.");
//} else if (numeroIngresado % 2 === 0) {
//  console.log("El número " + numeroIngresado + " es par.");
//} else {
//  console.log("El número " + numeroIngresado + " es impar.");
//}

// Inicializar la variable
let variable = 10;

// Usar un bucle while para restar 1 en cada iteración hasta que la variable sea igual a 0
while (variable >= 0) {
  // Imprimir el valor de la variable en cada iteración
  console.log(variable);

  // Restar 1 de la variable
  variable--;
}
function esPar(numero) {
  return numero % 2 === 0;
}

// Probando la función con diferentes números
console.log(esPar(8));   // true
console.log(esPar(7));   // false

function convertirCelsiusAFahrenheit(celsius) {
  let fahrenheit = celsius * 1.8 + 32;
  console.log(celsius + "°C es igual a " + fahrenheit + "°F");
}

// Probando la función con diferentes valores de Celsius
convertirCelsiusAFahrenheit(30);   // 0°C es igual a 32°F

// Definiendo el objeto persona
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",
  
  // Método para cambiar la ciudad
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};

// Mostrando las propiedades originales en la consola
console.log(persona);

// Cambiando la ciudad de la persona
persona.cambiarCiudad("Barcelona");

// Mostrando las propiedades actualizadas en la consola
console.log(persona);

// Definiendo el objeto libro
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,

  // Método para determinar si el libro tiene más de 10 años
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      if (añoActual - this.año > 10) {
          console.log("El libro '" + this.titulo + "' es antiguo.");
      } else {
          console.log("El libro '" + this.titulo + "' es reciente.");
      }
  }
};

// Llamando al método para mostrar si el libro es antiguo o reciente
libro.esAntiguo();

// Arrays

// Declarando el array original
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Inicializando el nuevo array
let numerosMultiplicados = [];

// Bucle que multiplica cada número por 2 y lo almacena en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrando los arrays en la consola
console.log("Array original:", numeros);
console.log("Nuevo array multiplicado por 2:", numerosMultiplicados);

// Declarando el array vacío
let pares = [];

// Bucle que itera hasta encontrar los primeros 10 números pares
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

// Imprimiendo el array de números pares en la consola
console.log("Los primeros 10 números pares son:", pares);

