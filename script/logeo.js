let textoLogeo = document.getElementById("texterror")
const usuarioLogin = document.getElementById("usuario")
const contraseñaLogin = document.getElementById("contraseña")
const boton = document.getElementById("boton")

let usuariosRegistrados = []
let logeoUsuario = JSON.parse(localStorage.getItem(`usuario`));




boton.addEventListener(`click`, (e) => {
    e.preventDefault()


    logeoUsuario.forEach((usuario) => {
        if (usuarioLogin.value == usuario.usuario && contraseñaLogin.value == usuario.contraseña) {
            textoLogeo.innerHTML = "Te logeaste"
            window.location = "../index.html"
        } else {
            usuarioLogin.value = ""
            contraseñaLogin.value = ""
            textoLogeo.innerHTML = "Ingresaste lo datos incorrectos, porfavor ingresar nuevamente."
            textoLogeo.style.color = "red";
            usuario.style.borderColor = "red"
            contraseña.style.borderColor = "red"

        }
    })

})

