const service = require('../services/users')
const handlerError = require('./handleError')




const create = async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            throw { status: 400, message: 'Invalid Data' }
        }

        const created = await service.create(req.body)
        res.status(201).json(created)
    } catch (error) {
        handlerError(res, error)
    }
}

const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) {
            throw { status: 400, message: 'Invalid Data' }
        }
        const data = await service.login(req.body)
        res.json(data)
    } catch (error) {
        handlerError(res, error)
    }
}

module.exports = {
    create,
    login,
}