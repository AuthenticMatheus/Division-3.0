document.addEventListener('DOMContentLoaded', function() {
    fetch('produtos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o JSON');
            }
            return response.json();
        })
        .then(produtos => {
            const container = document.getElementById('product-container');
            produtos.forEach(produto => {
                const card = document.createElement('div');
                card.className = 'card';
                card.setAttribute('data-filter', produto.filtro);

                const cardImg = document.createElement('div');
                cardImg.className = 'card-img';
                const img = document.createElement('img');
                img.src = produto.imagem;
                img.alt = produto.nome;
                cardImg.appendChild(img);

                const cardInfo = document.createElement('div');
                cardInfo.className = 'card-info';
                const title = document.createElement('p');
                title.className = 'text-title';
                title.textContent = produto.nome;
                const body = document.createElement('p');
                body.className = 'text-body';
                body.textContent = produto.descricao;
                cardInfo.appendChild(title);
                cardInfo.appendChild(body);

                const cardFooter = document.createElement('div');
                cardFooter.className = 'card-footer';
                const price = document.createElement('span');
                price.className = 'text-title';
                price.textContent = produto.preco;
                const link = document.createElement('a');
                link.href = produto.link;
                const button = document.createElement('button');
                button.className = 'card-button';
                button.textContent = 'ver detalhe';
                link.appendChild(button);
                cardFooter.appendChild(price);
                cardFooter.appendChild(link);

                card.appendChild(cardImg);
                card.appendChild(cardInfo);
                card.appendChild(cardFooter);

                container.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar o JSON:', error));
});
