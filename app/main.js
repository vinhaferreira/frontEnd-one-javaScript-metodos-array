let livros = [];
const endointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  const res = await fetch(endointDaAPI);
  livros = await res.json();
  let livrosComDesconto = aplicarDesconto(livros);
  console.table(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
