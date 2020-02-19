## Informações importantes
<ul>
    <li>
        Esta aplicação possui somente duas rotas que são "/" e "/teachers/all", 
        qualquer outra rota além dessa pode direcionar para o lugar errado 
        ou para nenhum site.
    </li>
    <li>
        Esta aplicação está disponível em 
        <a href="https://colmeia-teachers-api.herokuapp.com/" target="blank" >
            https://colmeia-teachers-api.herokuapp.com/
        </a>
    </li>
</ul>


## Rotas
<table>
    <thead>
         <tr>
            <th>path</th>
            <th>Exemplo de resultado</th>
            <th>link to deployed example</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>/</td>
            <td>It Works!</td>
            <td>
                <a target="blank" href="https://colmeia-teachers-api.herokuapp.com/" >
                    https://colmeia-teachers-api.herokuapp.com/
                </a>
            </td>
        </tr>
        <tr>
            <td>/teachers/all</td>
            <td>[{...teacher1}, {...teacher2}...]</td>
            <td>
                <a target="blank" href="https://colmeia-teachers-api.herokuapp.com/teachers/all" >
                    https://colmeia-teachers-api.herokuapp.com/teachers/all
                </a>
            </td>
        </tr>
    </tbody>
</table>


## Como usar localmente
<ol>
    <li>Clone o projeto deste repositório.</li>
    <li>Acesse o diretório onde se encontra o projeto.</li>
    <li>Rode o comando <b>npm install</b> no bash ou cmd.</li>
    <li>Rode o comando <b>npm start</b>.</li>
    <li>
        Agora basta acessar <a href="http://localhost:9000" target="blank" >https://localhost:9000</a>,
        para testar a aplicação.
    </li>
</ol>