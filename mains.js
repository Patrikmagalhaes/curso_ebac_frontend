$('document').ready(function () {
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 00000-0000' })
    $('#cpf').mask('000.000.000-00', { placeholder: '000.000.000-00' })
    $('#cep').mask('00000-000', { placeholder: '00000-000' })


    $('form').validate({

        rules: {
            nome: {
                required: true,
            },
            sobrenome: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            cep: {
                required: true
            },
            endereco: {
                required: true
            }
        },
        messages: {
            nome: "Insira o nome",
            sobrenome: "Insira o sobrenome",
            email: "Insira um e-mail válido",
            telefone: "Insira o telefone",
            cpf: "Insira o cpf",
            endereco: "Insira o endereço",
            cep: "Insira o cep"
        },
        submitHandler: function (form) {
            alert(`Obrigado ${nome.value} ${sobrenome.value} a Ebac lhe enviara uma supresa no seu E-mail`)
        },
        invalidHandler: function (evento, validador) {
            let camposIncorretos = validador.numberOfInvalids()
            alert(`Existem ${camposIncorretos} campos incorretos`)
        }
    })
})