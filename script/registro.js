let usuarioRegistro = document.getElementById("usuarioRegister")
let contraseñaRegistro = document.getElementById("contraseñaRegister")
let botonRegister = document.getElementById("botonRegister")
let textRegistro = document.getElementById("textRegister")


let usuariosRegistrados = []



class Usuarios {
    constructor(usuario,contraseña){
        this.usuario = usuario
        this.contraseña = contraseña
    }
}




// funcion para registrar usuario

botonRegister.addEventListener(`click`, (e) => {
    e.preventDefault()
    usuariosRegistrados.push(new Usuarios(usuarioRegistro.value, contraseñaRegistro.value))
    localStorage.setItem("usuario", JSON.stringify(usuariosRegistrados));
    textRegistro.innerHTML = "Tu cuenta fue creada"
})

