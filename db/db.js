var MongoClient = require('mongodb').MongoClient;               // importando o MongoDB
var url = "mongodb+srv://" +                                    // url de conexão com o banco de dados
    "adm:123@agenda-db-53hni" +                                 // usuario, senha e banco dados
    ".mongodb.net/test?retryWrites=true";

// create
exports.post = function (data, resp) {                    // gravar na agenda de um dia
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, conexao) {
        var db = conexao.db("agenda-db");
        var mes = 'mes_' + data.mes;
        var dia = 'dia_' + data.dia;

        db.collection('ano_' + data.ano).insertOne({                 // inserindo na collection (tabela)
            [mes]: {                                                  // (coluna)
                [dia]: data.evento                                    // (linha)
            }
        }, function (err, res) {
            resp(res);
        });

        conexao.close();
    });
}

// read
exports.get = function (data, resp) {             // ler agenda de um dia
    MongoClient.connect(url, { useNewUrlParser: true }, function (err, conexao) {
        var db = conexao.db("agenda-db");

        db.collection('ano' + data.ano).find({                      // procurando na collection (tabela)
            // mes: data.mes                                   // (coluna)
            // dia: data.dia                                  // (linha)
        }, function (err, res) {
            console.log(res)
            // resp(res);
        });

        conexao.close();
    });
}