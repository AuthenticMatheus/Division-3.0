const fs = require('fs');
const path = './html/produtos.json'; // Caminho do seu arquivo JSON

// Função para alterar os links no JSON
fs.readFile(path, 'utf8', (err, data) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
    return;
  }

  // Converte o conteúdo do arquivo JSON para um objeto
  let produtos = JSON.parse(data);

  // Altera o campo 'link' de todos os produtos
  produtos = produtos.map(produto => {
    produto.link = 'https://www.instagram.com/direct/t/17844636648137124'; // Novo link
    return produto;
  });

  // Grava as alterações de volta no arquivo
  fs.writeFile(path, JSON.stringify(produtos, null, 2), 'utf8', err => {
    if (err) {
      console.error('Erro ao gravar o arquivo:', err);
      return;
    }
    console.log('Links alterados com sucesso!');
  });
});