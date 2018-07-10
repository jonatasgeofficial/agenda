var express = require('express');                                           // importando o express js
var handlebars = require('express-handlebars');                             // importando o express-handlebars
var bodyParser = require('body-parser');                                    // importando o body-parser
var mongoose = require('mongoose');                                         // importando o mongoose

var app = express();                                                        // criando o app

mongoose.connect(                                                           // conectando com o banco de dados
    'mongodb://localhost/node-starter', 
    {user: '', pass: '', useNewUrlParser: false }
);
mongoose.connection.on('error', function () {                               // mensagem de erro na conexão com o banco
    console.log("erro ao conectar ao banco de dados");
});
mongoose.connection.once('open', function () {                              // mensagem de sucesso na conexão com o banco
    console.log("conexão com mongodb://localhost/node-starter feita");
});

app.use(bodyParser.urlencoded({ extended: false }));                        // passa os dados recebidos para json
app.use(bodyParser.json());                                                 // passa os dados recebidos para json

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));            // configurando o view engine handlebars
app.set('view engine', 'handlebars');                                       // configurando o view engine handlebars
app.use('/', require('./routes/index'));
app.use('/js', express.static('views/js'));

app.listen(3000, function () {                                              // iniciando a aplicação (servidor) na porta 3000
    console.log('rodando na porta 3000');
});
