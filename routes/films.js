const express = require('express');
const router = express.Router();

//Retorna todos os filmes
router.get('/', (req, res, next) => {
    res.status(200).send({
        message: 'GET films'
    });
});

//Insere um filme
router.post('/', (req, res, next) => {
    res.status(201).send({
        message: 'POST films'
    });
});

//Retorna um filme pelo id
router.get('/id_produto', (req, res, next) => {
    const id = req.params.id_film
    res.status(200).send({
        message: 'GET for a film',
        id: id
    });
});

//Altera um filme
router.patch('/', (req, res, next) => {
    res.status(201).send({
        message: 'PATCH'
    });
});

//Exclui um filme
router.delete('/', (req, res, next) => {
    res.status(201).send({
        message: 'DELETE a film'
    });
});


module.exports = router;