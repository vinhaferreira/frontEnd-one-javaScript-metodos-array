let livros = [];
const endointDaAPI =
  "https://guilhermeonrails.github.io/casadocodigo/livros.json";
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
  //await espere por uma promessa do endPoint
  const res = await fetch(endointDaAPI);
  livros = await res.json();
  livros = aplicarDesconto(livros);
  exibirOsLivrosNaTela(livrosComDesconto);
}
