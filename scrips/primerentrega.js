// variables
const usuario = "matih";
const contrasena = "123m";
let oncod = true;
let menua;
let nuevoRegistro = [];
logeo();


//  Constructor
class Gym {
    constructor(ejercicio, repeticiones, kilos) {
        this.ejercicio = ejercicio;
        this.repeticiones = repeticiones;
        this.kilos = Number(kilos);
    }
}

// funcion almacenamiento 
function almacenamientoEjercicio() {
    let registroEjercicio = prompt("Que ejercicio realizaste?")
    let registrorepeticiones = Number(prompt("Cuantas series hiciste"))
    let registroKilos = Number(prompt("Cuantos kilos levantaste"))
    let listaregistronuevo = new Gym(registroEjercicio, registrorepeticiones, registroKilos)
    if (registrorepeticiones == "" || registroKilos == "" || registrorepeticiones <= 0 || registroKilos <= 0) {
        return alert("Ingresa valores validos");
    }
    nuevoRegistro.push(listaregistronuevo)
}

// funcion para filtrar los ejercicios realizados
function filtroEjercicios() {
    const filtradokilos = nuevoRegistro.map((element) => element.kilos)
    const filtradoEjercicio = nuevoRegistro.map((element) => element.ejercicio)
    const filtradoRepeticiones = nuevoRegistro.map((element) => element.repeticiones)
    if (nuevoRegistro == "") {
        return alert("Registro sin datos, ingresa algun dato valido.")
    } else {
        alert("En el ejercicio " + filtradoEjercicio + " realizaste, " + filtradoRepeticiones + " Repeticiones con " + filtradokilos + " Kilos ")
    }
}

// funcion para borrar todo el registro de los ejercicios
function borrar() {
    nuevoRegistro = [];
    alert("Borraste todo el registro")
}

// funcion para logear al usuario..
function logeo() {
    alert("Bienvenido a FITPLAN. \n -Aqui podras hacer tu seguimiento de gimnasio y ver tus mejoras.")
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

        }
        oncod = false;

    }
}

// menu de interaccion con el usuario
    do {
        if (oncod == true) {
            menua = Number(prompt("Bienvenido " + usuario + " \n\ 1 Seguimiento de ejercicios \n\ 2 Ejercicios anotados. \n\ 3 Borrar Registro \n\ 4 salir "))
    
            switch (menua) {
                case 1:
                    almacenamientoEjercicio()
                    break;
                case 2:
                    filtroEjercicios()
                    break;
                case 3:
                    borrar();
                    break;
                case 4:
                    alert("Muchos exitos en tu entrenamiento " + usuario)
                    break;
                default:
                    alert("La opcion ingresada es " + menua + ", ingresa la opcion correcta.")
                    break;
            }
    
        }
    } while (menua != 4);
