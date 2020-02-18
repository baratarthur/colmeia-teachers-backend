'use strict'

const db = require('../db')

module.exports = {
    getAll: async (req, res) => {
        try{
            const Professores = db.Object.extend('Professores')
            const query = new db.Query(Professores)
            const result = await query.find()
            res.status(200).send(result);
        } catch (e) {
            console.log(e)
            res.status(500).send(e);
        }
    }
}
