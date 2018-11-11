const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const unidadeSchema = new Schema({
  campus: {
    type: String,
    minlength: 3,
    maxlength: 254
  },
  nome: {
    type: String,
    minlength: 3,
    maxlength: 254
  },
  sigla: {
    type: String,
    minlength: 1,
    maxlength: 254
  }
});

module.exports = mongoose.model('Unidade', unidadeSchema);