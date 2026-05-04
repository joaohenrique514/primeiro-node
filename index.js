const http = require('http')

const servidor = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')

    if (req.url === '/') {
        res.end('Bem vindo à página inicial!')
    } else if (req.url === '/sobre') {
        res.end('Meu nome é João e estou aprendendo Node.js!')
    } else {
        res.end('Página não encontrada!')
    }
})

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})