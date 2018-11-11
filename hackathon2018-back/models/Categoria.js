const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const categoriaSchema = new Schema({
  nome: {
    type: String,
    minlength: 3,
    maxlength: 254
  }
});

module.exports = mongoose.model('Categoria', categoriaSchema);