var mongoose = require('mongoose');                       // importando o mongoose

var agendaSchema = mongoose.Schema({                      // definindo os dados que serão salvos
  ano: { type: String, required: true },
  mes: { type: String, required: true },
  dia: { type: String, required: true },
  evento: { type: String }
});

var Agenda = mongoose.model('Agenda', agendaSchema);    // 
module.exports = Agenda;                          // exportando