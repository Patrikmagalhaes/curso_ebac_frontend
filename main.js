
document.querySelector('form').addEventListener("submit", function (e) {
   

    document.getElementById('alerta').classList.remove("off")
    document.getElementById('nome').value = ""
    document.getElementById('tel').value = ""
    document.getElementById('email').value = ""
    e.preventDefault()

})
