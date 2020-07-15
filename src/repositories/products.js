const knex = require('../../database');

const tableName = 'products'

const getAll = () => knex(tableName)

const getById = (id) => {
    return knex(tableName)
        .where({ id: id })
        .then(([product]) => product)
}

const create = (product) => {
    return knex(tableName)
        .insert(product)
        .then(([inserted]) => inserted);
};

const update = (id, product) => {
    return knex(tableName)
        .where({ id: id })
        .update(product)
}

const del = (id) => {
    return knex(tableName)
        .where({ id: id }).del()
}

module.exports = {
    getAll,
    create,
    getById,
    del,
    update,
};