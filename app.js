const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Bem vindo à página inicial!')
})

app.get('/sobre', (req, res) => {
    res.send('Meu nome é João e estou aprendendo Express!')
})

app.listen(3000, () => {
    console.log('Servidor Express rodando em http://localhost:3000')
})

app.get('/usuario', (req, res) => {
    res.json({
        nome: 'João',
        idade: 15,
        linguagem: 'Node.js'
    })
})

app.get('/contato', (req, res) => {
    res.json({
        nome: 'João',
        email: 'joaozinho@gmail.com',
        mensagem: 'Entre em contato comigo!'
    })
})