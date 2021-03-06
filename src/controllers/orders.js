const service = require('../services/orders')
const handlerError = require('./handleError')
const Order = require('../models/Order')


const getAll = async (req, res) => {
    try {
        const orders = await service.getAll()
        res.json(orders)
    } catch (error) {
        handlerError(res, error)
    }
}

const create = async (req, res) => {
    try {
        if (!req.body.quantity || !req.body.product_id) {
            throw { status: 400, message: 'Invalid data' }
        }

        const created = await service.create(req.body)
        res.status(201).json(created)
    } catch (error) {
        handlerError(res, error)
    }
}

const update = async (req, res) => {
    try {
        const updated = await service.update(req.params.id, req.body)
        res.json(updated)
    } catch (error) {
        handlerError(res, error)
    }
}

module.exports = {
    getAll,
    create,
    update,
}