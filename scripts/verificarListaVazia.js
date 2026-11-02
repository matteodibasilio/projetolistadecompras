const mensagemlistavazia = document.querySelector(".mensagem-lista-vazia")

function verificarListaVazia(lista) {
    const itensDaLista = lista.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemlistavazia.style.display = "block";
    } else {
        mensagemlistavazia.style.display = "none";
    }
}

export default verificarListaVazia;