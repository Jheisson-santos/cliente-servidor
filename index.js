const express = require('express');
const app = express();
const port = 3000

app.listen(port, ()=>{
    console.log(`Leitura de app na porta ${port}`);
})
//.get necessita de dois parametro, a requisição e a resposta
app.get('/', (requisicao, resposta)=>{
    resposta.send('No alto daquele cume plantei um roseira')
})
app.get('/rota2', (requisicao, resposta)=>{
    resposta.send('oakdlfgok')
})
app.get('/primeDay/:produto', (requisicao, resposta)=>{
    
    resposta.send(requisicao.params.produto)
})