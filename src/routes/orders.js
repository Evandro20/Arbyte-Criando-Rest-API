const { Router } = require('express');
const router = new Router();
const controller = require('../controllers/orders')

const routeName = '/orders'

router.get(routeName, controller.getAll)

router.get(`${routeName}/:id`, (req, res) => {
    res.json({
        message: 'Vai retornar os dados de um Pedido dado um id',
        id: req.params.id,
    });
});

router.post(routeName, controller.create)

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