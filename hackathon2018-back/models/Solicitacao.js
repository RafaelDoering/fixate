const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const solicitacaoSchema = new Schema({
  item: {
    type: String,
  },
  descricao: {
    type: String,
  }
});

module.exports = mongoose.model('Solicitacao', solicitacaoSchema);