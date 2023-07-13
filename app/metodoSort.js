// metodo sort ordena os elementos do proprio array e retorna o array. Posso deifinir funcao de comparacao, retorna pelo valor de unicode
let btnOrdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOrdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
