$(document).ready(function () {
    let tarefasSalvas = []
    $('form').on('submit', function (e) {
        e.preventDefault()
        const tarefa = $('input').val()//pega o valor do input (nome da tarefa)
        tarefa.trim()//limpa espaços antes e depois 
        if (tarefasSalvas.includes(tarefa.value)) {
            alert("A tarefa ja existe !")
            $('input').val("")
        } else {
            tarefasSalvas.push(tarefa.value)
            const listaDeTarefa = $(`#lista`)//seleciona a tag ul onde sera adicionada as li's
            $(`<li>${tarefa}</li>`).appendTo(listaDeTarefa)//adiciona a tag li dentro da tag ul com o valor do input (nome da tarefa) 
        }

        let on = [1]
        $(`#lista`).click(function () {
          
            if (on[0] === 1 ) {
                $(this).addClass("tarefa-feita")
                on = []
                on.push(0) 
            } else {
                $(this).removeClass("tarefa-feita")
                $(this).addClass(".na-feita")
                on = []
                on.push(1)
            
            }
        })
    })
})

