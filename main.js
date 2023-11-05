$(document).ready(function () {
    $("header button").click(function(){
        $("form").slideDown()
    })
    $("#cancelar").click(function(){
        $("form").slideUp()
    })

    $("form").on("submit", function (e) { 
        e.preventDefault()
        const imagemNova = $("#urlImagemNova").val()
        const imagem = $["<li></li>"]
    })

})