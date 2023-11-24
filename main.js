
document.querySelector('form').addEventListener("submit", function (e) {
    e.preventDefault()

    document.getElementById('alerta').classList.remove("off")
    document.getElementById('nome').innerHTML = ""

})
