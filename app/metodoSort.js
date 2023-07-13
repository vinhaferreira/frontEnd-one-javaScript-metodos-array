// metodo sort ordena os elementos do proprio array e retorna o array. Posso deifinir funcao de comparacao, retorna pelo valor de unicode
let btnOdenarPorPreco = document.getElementById("btnOrdenarPorPreco");
btnOdenarPorPreco.addEventListener("click", ordenarLivrosPorPreco);

function ordenarLivrosPorPreco() {
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);
  exibirOsLivrosNaTela(livrosOrdenados);
}
