const { Router } = require('express');
const router = new Router();

const routeName = '/products'

router.get(routeName, (req, res) => {
    res.json([{ message: 'Vai retornar todos os Produtos' }])
});

router.get(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai retornar os dados de um  Produto dado um id',
        id: req.params.id,
    });
});

router.post(routeName, (req, res) => {
    const produto = {
        nome: req.body.nome,
        preco: req.body.preco,
    };
    res.status(201).json({
        message: 'Vai criar um Produto',
        produtoCriado: produto,
    })
})

router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai editar os dados de um Produto dado um id',
        id: req.params.id,
    });
});

router.delete(`${routeName}/:id`, (req, res) => {
    res.status(204).end()
});

module.exports = router;