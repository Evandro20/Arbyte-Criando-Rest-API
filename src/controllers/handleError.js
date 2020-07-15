const handlerError = (res, error) => {
    res.status(error.status || 500).json(error)
}

module.exports = handlerError