
/*let temperatura = prompt("Ingrese su temperatura");

if (temperatura < 37.5){
    alert("Prioridad Baja")
} else{
    alert("Priodidad Alta")
}

console.log('Termino tu Código')
*/
//OPERADORES//

//Temperatura > 37.5
//Temperatura >= 37.5
//Temperatura < 37.5
//Temperatura <= 37.5

//Temperatura == 37.5 // COMPARACION BLANDA
//Temperatura === 37.5 // COMPARACION ESTRICTA

// ! // OPERADOR DE NEGACION
// || // OPERADOR O LOGICO
// && // OPERADOR Y LOGICO
// != // DISTINTO DE BLANDA
// !== // DISTINTO DE ESTRICTA


let edad = Number(prompt("Ingrese su edad"));

if (edad < 18) {
     alert("No puede pasar al bar");
} else if (edad < 21){
    alert("Puede pasar al bar, pero no puede tomar alcohol");
} else {
    alert("Puede pasar por completo");
}