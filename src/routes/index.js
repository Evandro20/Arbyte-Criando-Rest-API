const { Router } = require('express')
const orders = require('./orders')
const products = require('./products')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const router = new Router()

router.use(morgan('dev'))
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json())

router.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header(
        'Acess-Control-Allow-Header',
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Aloow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
})

router.use(orders)
router.use(products)

router.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

router.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = router