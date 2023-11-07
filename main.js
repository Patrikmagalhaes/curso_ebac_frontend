$(document).ready(function () {
    $("header button").click(function () {
        $("form").slideDown()//efeito de slide abrindo ao clicar em Adicionar imagem
    })
    $("#cancelar").click(function () {
        $("form").slideUp()//efeito de slide fechando ao clicar em cancelar
    })

    $("form").on("submit", function (e) {
        e.preventDefault()
        const urlImagem = $("#urlImagemNova").val()
        console.log(`endereço: ${urlImagem}`)
        const novoItem = $(`<li style="display: none"></li>`)
        $(`<img src="${urlImagem}"/>`).appendTo(novoItem)

        $(`<div class="orverlay-image-link">
            <a href="${urlImagem}" target="_blank" title="Ver imagem em tamanho real">
          Ver imagem em tamanho real
            </a>
            </div>`).appendTo(novoItem)
            $(novoItem).appendTo("ul")
            $(novoItem).fadeIn(1000)
            $("#urlImagemNova").val("")
          

    })

})