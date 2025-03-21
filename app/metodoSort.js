const btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco")

btnOrdenarPorPreco.addEventListener ("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco(){
    let livroOrdemPorPreco = livros.sort((a,b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livroOrdemPorPreco);
}