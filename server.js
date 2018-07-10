var express = require('express');           // importando o express js
var app = express();                        // criando o app
var router = require('./router/router');    // importando as rotas

app.use('/api', router);                    // definindo um padrão das rotas prefixadas com '/api'

app.listen(3000);                           // iniciando a aplicação (servidor) na porta 3000
console.log('rodando na porta 3000');