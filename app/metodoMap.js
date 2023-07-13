function aplicarDesconto(livros) {
  //metodo map() iinvoca a função callback passada por argumento para cada elemento do Array e devolve um novo array como resultado

  const desconto = 0.3;
  livrosComDesconto = livros.map((livro) => {
    return { ...livro, preco: livro.preco - livro.preco * desconto };
  });
  return livrosComDesconto;
}
