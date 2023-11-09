$(document).ready(function () {
    let tarefasSalvas = []
    $('form').on('submit', function (e) {
        e.preventDefault()
        const tarefa = $('input').val().trim("")/*pega o valor do input (nome da tarefa)
        e limpa espaços antes e depois das palavras*/

        //verifica se existe uma tarefa igual
        if (tarefasSalvas.includes(tarefa)) {
            alert("A tarefa ja existe !")
            $('input').val("")
        } else if (tarefa === "") { alert("Digite uma tarefa válida!") }
        else {
            tarefasSalvas.push(tarefa)
            const listaDeTarefa = $(`#lista`)//seleciona a tag ul onde sera adicionada as li's
            $(`<li>${tarefa}</li>`).appendTo(listaDeTarefa)//adiciona a tag li dentro da tag ul com o valor do input (nome da tarefa) 
        }

        let on = [1]
        $(`li`).click(function () {
            //se for verdadeiro risca a atividade e atualiza o valor pra 0
            if (on[0] === 1) {
                $(this).addClass("tarefa-feita")
                on = []
                on.push(0)
            } else {//remove o risco da atividade e atualiza o valor pra 1
                $(this).removeClass("tarefa-feita")
                $(this).addClass(".na-feita")
                on = []
                on.push(1)

            }
        })
    })
})

