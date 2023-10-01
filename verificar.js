const form = document.getElementById("formulario")
const mensagem = document.querySelector(".mensagem")
const mensagem2 = document.querySelector(".mensagem2")
let numeroValido = true

function validaNumero(numero1, numero2) {
    return numero1 < numero2
}

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const n1 = document.getElementById("n1").value
    const n2 = document.getElementById("n2").value


    numeroValido = validaNumero(n1, n2)


    if (numeroValido) {
        mensagem2.classList.remove("invalido")
        mensagem.classList.add("valido")
    } else {
        mensagem.classList.remove("valido")
        mensagem2.classList.add("invalido")
    }

})


