const { Router } = require('express');
const router = new Router();

const routeName = '/orders'

router.get(routeName, (req, res) => {
    res.json([{ message: 'Vai retornar todos os Pedidos' }])
});

router.get(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai retornar os dados de um Pedido dado um id',
        id: req.params.id,
    });
});

router.post(routeName, (req, res) => {
    res.status(201).json({
        message: 'Vai criar um Pedido',
    })
})

router.patch(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai editar os dados de um Pedido dado um id',
        id: req.params.id,
    });
});

router.delete(`${routeName}/:id`, (req, res) => {
    res.status(204).end()
});

module.exports = router;