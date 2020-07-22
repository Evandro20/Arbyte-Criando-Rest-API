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


const login = async (req, res) => { }

module.exports = {
    create,
    login,
}