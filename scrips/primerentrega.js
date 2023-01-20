//  Constructor
class Gym {
    constructor(ejercicio, repeticiones, kilos) {
        this.ejercicio = ejercicio;
        this.repeticiones = repeticiones;
        this.kilos = Number(kilos);
    }
}

// variables

const usuario = "matih";
const contrasena = "123m";
const pressbanca = 30;
const flexiones = 15;
const apertumancu = 20;
const curlbiceps = 15;
var oncod = true;
let next;
const nuevoRegistro = [];


//presentacion
alert("Bienvenido a FITPLAN. \n -Aqui podras hacer tu seguimiento de gimnasio y ver tus mejoras.")

//login de cuenta con 3 reintentos
for (i = 3; i >= 0; i--) {
    let u = prompt("Ingresa tu usuario");
    let c = prompt("Ingresa tu contraseña");
    if ((u == usuario) && (c == contrasena)) {
        alert("Bienvenido Admin")
        break;
    }
    if (u == "" && c == "") {
        alert("No ingresaste nada, porfavor ingresa tu usuario y contraseña. Te quedan " + i + " intentos")
    } else {
        alert("Usuario y contraseña incorrecta, vuelve a intentar. Te quedan " + i + " Intentos")
    }
    if (i == 0) {
        alert("Tu cuenta fue bloqueada, comunicate con soporte.")


        break;
        // si se llega a los limites de reintentos se bloquea la cuenta y se corta el siguiente codigo cambia la var oncod a false.
    }
    var oncod = false;

}


//
while (oncod == true) {
    var menua = prompt("Bienvenido " + usuario + "  \n\ 1 Seguimiento de ejercicios \n\  2 Ejercicios anotados. \n\ 3 salir ")


    switch (menua) {
        case "1":
            let registroEjercicio = prompt("Que ejercicio realizaste?")
            let registrorepeticiones = Number(prompt("Cuantas series hiciste"))
            let registroKilos = Number(prompt("Cuantos kilos levantaste"))
            let listaregistronuevo = new Gym(registroEjercicio, registrorepeticiones, registroKilos)
            nuevoRegistro.push(listaregistronuevo)
            next = confirm("Quieres ingresar otro registro de ejercicios?");
            break;


        case "2":
            const filtradokilos = nuevoRegistro.map((Element) => Element.kilos)
            const filtradoEjercicio = nuevoRegistro.map((Element) => Element.ejercicio)
            const filtradoRepeticiones = nuevoRegistro.map((Element) => Element.repeticiones)
            alert("En el ejercicio " + filtradoEjercicio + " realizaste " + filtradoRepeticiones + " Repeticiones con " + filtradokilos + " Kilos")
            break;


        case "3":
            alert("Muchos exitos en tu entrenamiento " + usuario)

            block;
        default:
            alert("Numero ingresado incorrecto, porfavor ingresar \n\ 1 Seguimiento de ejercicios \n\  2 Ejercicios anotados. \n\ 3 salir ")
            continue;
    }

}



//     let pressb = Number(prompt("Cuantos kilos levantaste en pressbanca"))
//     let flex = Number(prompt("Cuantos kilos levantaste en flexiones"))
//     let apertm = Number(prompt("Cuantos kilos levantaste en apertura con mancuerna"))
//     let curlb = Number(prompt("Cuantos kilos levantaste en curlbiceps"))

//     if (isNaN(pressb) || isNaN(flex) || isNaN(apertm) || isNaN(curlb) || pressb <= 0 || flex <= 0 || apertm <= 0 || curlb <= 0) {
//         alert("Porfavor ingresar numeros validos, muchas gracias.");
//         continue;

//     }

//     if (pressb > pressbanca) {
//         alert("Mejoraste tu peso de pressbanca, estabas levantando " + pressbanca + " kilos y ahora levantaste " + pressb)
//     } else {
//         alert("No mejoraste tu anterior peso de pressbanca, estabas levantando " + pressbanca + " kilos y ahora levantaste " + pressb + " sigue esforzandote")
//     }

//     if (flex > flexiones) {
//         alert("Mejoraste tu peso de flexiones, estabas levantando " + flexiones + " kilos y ahora levantaste " + flex)
//     } else {
//         alert("No mejoraste tu anterior peso de flexiones, estabas levantando " + flexiones + " kilos y ahora levantaste " + flex + " sigue esforzandote")
//     }
//     if (apertm > apertumancu) {
//         alert("Mejoraste tu peso de apertura con mancuernas, estabas levantando " + apertumancu + " kilos y ahora levantaste " + apertm)
//     } else {
//         alert("No mejoraste tu anterior peso de apertura con mancuernas, estabas levantando " + apertumancu + " kilos y ahora levantaste " + apertm + " sigue esforzandote")
//     }
//     if (curlb > curlbiceps) {
//         alert("Mejoraste tu peso de curlbiceps, estabas levantando " + curlbiceps + " kilos y ahora levantaste " + curlb)
//     } else {
//         alert("No mejoraste tu anterior peso de curlbiceps, estabas levantando " + curlbiceps + " kilos y ahora levantaste " + curlb + " sigue esforzandote")
//     }

//     // Function en flecha
//     const kilosAumentado = (pressb, pressbanca) => pressb - pressbanca;
//     const kilosAumentado1 = (apertm, apertumancu) => apertm - apertumancu;
//     const kilosAumentado2 = (flex, flexiones) => flex - flexiones;
//     const kilosAumentado3 = (curlb, curlbiceps) => curlb - curlbiceps;


//     // alerta de cuanto kilos mejoraste
//     alert("Aumentaste " + kilosAumentado(pressb, pressbanca) + " Kilos en pressbanca \n" + "Aumentaste " + kilosAumentado1(apertm, apertumancu) + " Kilos en apertura con mancuernas \n" + "Aumentaste " + kilosAumentado2(flex, flexiones) + " Kilos en flexiones \n" + "Aumentaste " + kilosAumentado3(curlb, curlbiceps) + " Kilos en curlb de biceps \n")

// }