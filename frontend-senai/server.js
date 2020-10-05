function buscarFilmes() {
    const table = document.getElementById('Filmes');
    
    if (table.style.visibility === 'visible') {
        table.style.visibility = 'hidden';
    } else {
        table.style.visibility = 'visible';
    }

    

    fetch(`http://localhost:5000/api/Filmes`)
        .then((resp) => resp.json())
        .then(function (data) {
            console.log(data)


            let output =
                `<tr>
                    <th>Filme</th>
                    <th>Gênero</th>
                </tr>`;

            let table = data;
            for (let x of table) {
                output +=
                    `<tr>
                    <td>${x.titulo}</td>
                    <td>${x.idGeneroNavigation.nome}
                </tr>`;
            }

            document.getElementById('Filmes').innerHTML = output;

        })
        .catch((error) => {
            console.log('Deu erro!' + error)
        })
}