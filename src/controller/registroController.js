const express = require('express');
const router = express.Router();
const registroService = require('../service/registroService');

router.post('/inserir', (req, res) => {
    var { nome, data, servico, telefone } = req.body;
    try {
        registroService.gravarRegistro(nome, data, servico, telefone);
        res.sendStatus(200);
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/listarHoje', (req, res) => {
    try {
        registroService.listarRegistrosHoje().then((result) => {
            res.send(result);
        });
    } catch (err) {
        res.sendStatus(500);
    }
});

router.get('/listarSemana', (req, res) => {
    try {
        registroService.listarRegistrosSemana().then((result) => {
            res.send(result);
        });
    } catch (err) {
        res.sendStatus(500);
    }
});

module.exports = router;