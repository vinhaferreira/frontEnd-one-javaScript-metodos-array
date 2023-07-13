// O metodo reduce() executa uma função reducer fornecida por vc para cada elemento do array resultando num uncio valor de retorno.
function calcularValorTotalDeLivrosDisponiveis(livros) {
  return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}
