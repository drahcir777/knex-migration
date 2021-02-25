const knex = require('../database/index')
class UserController {

    async find(req, res, next) {
        try {
            const result = await knex('users')
            return res.json(result)
        } catch (error) {
            next(error)
        }
    }

    async create(req, res, next) {
        const { username } = req.body;
        try {
            const result = await knex('users').insert({
                username
            })
            return res.status(201).send()
        } catch (error) {
            next(error)
        }
    }

    async update(req, res, next) {
        const { username } = req.body;
        const { id } = req.params
        try {
            const result = await knex('users').update({
                username
            })
                .where({ id })

            return res.send()
        } catch (error) {
            next(error)
        }
    }

    async delete(req, res, next) {
        const { id } = req.params
        try {
            const result = await knex('users')
                .where({ id })
                .del()
            return res.send()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new UserController()