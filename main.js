$(document).ready(function () {
    let tarefasSalvas = []
    $('form').on('submit', function (e) {
        e.preventDefault()
        const tarefa = $('input').val()//pega o valor do input (nome da tarefa)
        tarefa.trim()//limpa espaços antes e depois 
        if (tarefasSalvas.includes(tarefa.value) || tarefa == null) {
            alert("A tarefa ja existe !")
            $('input').val("")
        } else {
            tarefasSalvas.push(tarefa.value)
            const listaDeTarefa = $(`#lista`)//seleciona a tag ol onde sera adicionada as li's
            $(`<li>${tarefa}</li>`).appendTo(listaDeTarefa)//adiciona a tag li dentro da tag ol com o valor do input (nome da tarefa) 
        }
        $(`#lista`).click(function () {
            let i = 0
            for (i; i<=1;i ++){
              
            } //tentando implementar logica de marcar e desmarcar item com for
            $(this).addClass("tarefa-feita")
        })
        
    })
})