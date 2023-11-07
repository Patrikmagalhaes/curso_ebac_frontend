$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        const tarefa = $('input').val()//pega o valor do input (nome da tarefa)
        const listaDeTarefa = $(`#lista`)//seleciona a tag ol onde sera adicionada as li's
        $(`<li>${tarefa}</li>`).appendTo(listaDeTarefa)//adiciona a tag li dentro da tag ol com o valor do input (nome da tarefa) 


        

    })
})