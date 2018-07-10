var express = require('express');           // importando o express
var router = express.Router();              // criando as rotas usando Express
var db = require('./../db/db');             // importando o "banco de dados"

// rotas

// create
router.post('/', function (req, resp) {
    var param = '';

    req.on('data', function (data) {
        param += data.toString();
    });
    
    req.on('end', function () {
        var data = JSON.parse(param);
        
        db.post(data, function (res) {
            resp.json(res);
        });
    });
});

// read
router.get('/', function (req, resp) {
    var data = req.query ? req.query : '';

    db.get(data, function (res) {
        //console.log(JSON.stringify(res))
        //resp.json({...res});
    });
});

module.exports = router;                    // exportando rotas