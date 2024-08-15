const express = require('express');
const app = express();
const port = 3000
const op = require('./controllers/funcao.js')
const corretora = require('./controllers/corretora.js')

app.use(express.json())

//.get necessita de dois parametro, a requisição e a resposta
// app.get('/', (requisicao, resposta)=>{
//     resposta.send('Ola caro usuario')
// })
// app.get('/curso/:nome/:idade/:curso', (requisicao, resposta)=>{
//     resposta.send(`${requisicao.params.nome} tem ${requisicao.params.idade} e esta no curso ${requisicao.params.curso}`)
// })

// app.get('/contaSoma/:n1/:n2', (requisicao, resposta) => { 
//     const n1 = requisicao.params.n1
//     const n2 = requisicao.params.n2
//     const resultado = parseFloat(n1) + parseFloat(n2)


//     resposta.send(`${resultado}`)
// })
app.get('/soma', (req, res)=>{
    let result = op.somar(req.body)
    res.send(`${result}`)
})

app.get('/multiplicar', (req, res)=>{
    let result = op.multiplicar(req.body)
    res.send(`${result}`)
})

app.get('/porcentagem', (req, res)=>{
    let result = op.porcentagem(req.body)
    res.send(`${result}`)
})

app.get('/subtrair', (req, res)=>{
    let result = op.subtrair(req.body)
    res.send(`${result}`)
})

app.get('/divisao', (req, res)=>{
    let result = op.dividir(req.body)
    res.send(`${result}`)
})

app.get('/corretora', (req,res)=>{
    let casa = corretora.add(req.body)
    res.send(casa)
})

app.listen(port, () => {
    console.log(`Leitura de app na porta ${port}`); 
})
