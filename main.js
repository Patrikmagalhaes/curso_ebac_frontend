$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown()
    })
    $("#cancelar").click(function () {
        $("form").slideUp()
    })

    $("form").on("submit", function (e) {
        e.preventDefault()
        const urlImagem = $("#urlImagemNova").val()
        console.log(`endereço: ${urlImagem}`)
        const novoItem = $("<li></li>")
        $(`<img src="${urlImagem}"/>`).appendTo(novoItem)

        $(`<div class="orverlay-image-link">
            <a href="${urlImagem}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem)
            $(novoItem).appendTo("ul")
    })

})