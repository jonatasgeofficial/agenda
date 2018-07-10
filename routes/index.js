var router = require('express').Router();           // criando as rotas usando Express
var Agenda = require('./../models/Agenda');         // importando o modelo

// rotas

// create
router.post('/', function (req, res) {
    var evento = new Agenda({
        ano: req.body.ano,
        mes: req.body.mes,
        dia: req.body.dia,
        evento: req.body.evento
    });

    evento.save(function (err, newAgenda) {
        if (err) 
            return console.error(err);
        
        res.redirect('/');
    });
});

// read
router.get('/', function (req, res) {
    Agenda.find({}, function (err, eventos) {
        res.render('index', { eventos: eventos });
    });
});


// update
router.post('/update', function (req, res) {
    Agenda.updateOne({ "_id": req.body.id }, 
    { $set: {
        ano: req.body.ano,
        mes: req.body.mes,
        dia: req.body.dia,
        evento: req.body.evento
    }}, function (err, resp) {
        res.status(200).send();
    });
});

// delete
router.post('/delete', function (req, res) {
    Agenda.findByIdAndDelete(req.body.id, function (err, eventos) {
        res.status(200).send();
    });
});

module.exports = router;                            // exportando rotas