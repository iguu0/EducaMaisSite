// teste inicial de JS

const dados = ['nome', 'email', 'mensagem']

function logs() {
    let dadosPuxados = []

    for (i of dados) {
        let dado = document.getElementById(i).value
        alert(dado)
        dadosPuxados.push(dado)
    }

    alert(dadosPuxados)
}