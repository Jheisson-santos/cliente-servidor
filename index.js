const express = require('express');
const app = express();
const port = 3000

app.listen(port, ()=>{
    console.log(`Leitura de app na porta ${port}`);
})
//.get necessita de dois parametro, a requisição e a resposta
app.get('/', (requisicao, resposta)=>{
    resposta.send('Ola caro usuario')
})
app.get('/curso/:nome/:idade/:curso', (requisicao, resposta)=>{
    resposta.send(`${requisicao.params.nome} tem ${requisicao.params.idade} e esta no curso ${requisicao.params.curso}`)
})