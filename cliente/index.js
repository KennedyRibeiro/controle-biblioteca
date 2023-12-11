
document.addEventListener('DOMContentLoaded', () => {

    const formularioLivro = document.querySelector('#formulario-livro');
    
    formularioLivro.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let livro = document.querySelector('#titulo').value
        let autor = document.querySelector('#autor').value
        let quantidade = Number(document.querySelector('#qtde-exemplares').value);


        if (livro != '' && autor != '' && quantidade) {


            let corpoTabela = document.querySelector('#lista-livros tbody');
            let novalinha = document.createElement('tr');

            // Coluna 1
            let colunaLivro = document.createElement('td');
            colunaLivro.textContent = livro;

            // Coluna 2
            let colunaAutor = document.createElement('td');
            colunaAutor.textContent = autor;

            // Coluna 3
            let colunaQuantidade = document.createElement('td');
            colunaQuantidade.textContent = quantidade;

            // Coluna 4
            let colunaAptoEmprestimo = document.createElement('td');
            colunaAptoEmprestimo.textContent = quantidade > 5 ? 'Sim' : 'Não';

            //Colocar as colunas dentro da linha
            novalinha.appendChild(colunaLivro);
            novalinha.appendChild(colunaAutor);
            novalinha.appendChild(colunaQuantidade);
            novalinha.appendChild(colunaAptoEmprestimo);

            //Colocar a linha dentro do corpo da tabela
            corpoTabela.appendChild(novalinha);


        }else {
            alert('Preencha todos os campos!');
        }



        //Construa aqui sua lógica para cadastrar os livros e exibi-los na tabela.

    });

})

