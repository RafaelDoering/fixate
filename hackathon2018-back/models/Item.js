const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const itemSchema = new Schema({
  patrimonio: {
    type: Number,
    unique: true
  },
  unidade: {
    type: String,
  },
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  categoria: {
    type: String,
  },
  nomeCategoria: {
    type: String,
  },
  responsavel: {
    type: String,
  },
  localizacao: {
    type: String,
  },
  complemento: {
    type: String,
  },
  status: {
    type: String,
  },
  descricao: {
    type: String,
  }
});

module.exports = mongoose.model('Item', itemSchema);