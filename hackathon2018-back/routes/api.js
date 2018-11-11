const express = require('express');

const Unidade = require('../models/Unidade');
const Categoria = require('../models/Categoria');
const Item = require('../models/Item');
const Solicitacao = require('../models/Solicitacao');
const consts = require('../consts');

const router = express.Router();

router.post('/unidade', (req, res) => {
  var novaUnidade = new Unidade();

  novaUnidade.campus = req.body.campus;
  novaUnidade.nome = req.body.nome;
  novaUnidade.sigla = req.body.sigla;

  novaUnidade.save((err, unidadeCriada) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        unidadeCriada
      });
    }
  });
});

router.get('/unidade', (req, res) => {
  Unidade.find({}, function (err, unidades) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        unidades
      });
    }
  });
});

router.get('/unidade/:idUnidade', (req, res) => {
  Unidade.findById(req.params.idUnidade, function (err, unidade) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        unidade
      });
    }
  });
});

router.post('/categoria', (req, res) => {
  var novaCategoria = new Categoria();

  novaCategoria.nome = req.body.nome;

  novaCategoria.save((err, categoriaCriada) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        categoriaCriada
      });
    }
  });
});

router.get('/categoria', (req, res) => {
  Categoria.find({}, function (err, categorias) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        categorias
      });
    }
  });
});

router.post('/item', (req, res) => {
  var novoItem = new Item();

  novoItem.patrimonio = req.body.patrimonio;
  novoItem.unidade = req.body.unidade;
  novoItem.lat = req.body.lat;
  novoItem.lng = req.body.lng;
  novoItem.categoria = req.body.categoria;
  novoItem.nomeCategoria = req.body.nomeCategoria;
  novoItem.responsavel = req.body.responsavel;
  novoItem.localizacao = req.body.localizacao;
  novoItem.complemento = req.body.complemento;
  novoItem.status = req.body.status;
  novoItem.descricao = req.body.descricao;

  novoItem.save((err, itemCriado) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        itemCriado
      });
    }
  });
});

router.patch('/item/:idItem', (req, res) => {
  Item.findOneAndUpdate({ _id: req.params.idItem }, { status: req.body.status, descricao: req.body.descricao }, (err, itemAtualizado) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        itemAtualizado
      });
    }
  });
});

router.get('/item', (req, res) => {
  Item.find({}, function (err, itens) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        itens
      });
    }
  });
});

router.get('/numero-itens-quebrados', (req, res) => {
  Item.countDocuments({ status: 'Quebrado' }, function (err, count) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        count
      });
    }
  });
});

router.get('/numero-itens-em-ordem', (req, res) => {
  Item.countDocuments({ status: 'Em ordem' }, function (err, count) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        count
      });
    }
  });
});

router.get('/item-por-unidade/:id/:status', (req, res) => {
  const status = req.params.status;
  if (status === 'Todos') {
    Item.find({ unidade: req.params.id }, function (err, itens) {
      if (err) {
        return res.status(400).json({
          errors: [
            err
          ]
        });
      } else {
        return res.status(200).json({
          itens
        });
      }
    });
  } else {
    Item.find({ unidade: req.params.id, status: status }, function (err, itens) {
      if (err) {
        return res.status(400).json({
          errors: [
            err
          ]
        });
      } else {
        return res.status(200).json({
          itens
        });
      }
    });
  }
});

router.get('/item-quebrado', (req, res) => {
  Item.find({ status: "Quebrado" }, function (err, itens) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        itens
      });
    }
  });
});

router.get('/item/:patrimonio', (req, res) => {
  Item.findOne({ patrimonio: req.params.patrimonio }, function (err, item) {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        item
      });
    }
  });
});

router.post('/solicitacao', (req, res) => {
  var novaSolicitacao = new Solicitacao();

  novaSolicitacao.item = req.body.item;
  novaSolicitacao.descricao = req.body.descricao;

  novaSolicitacao.save((err, solicitacaoCriada) => {
    if (err) {
      return res.status(400).json({
        errors: [
          err
        ]
      });
    } else {
      return res.status(200).json({
        solicitacaoCriada
      });
    }
  });
});

module.exports = router;