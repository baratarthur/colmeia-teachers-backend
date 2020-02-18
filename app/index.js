'use strict'

const Api = require('express')()
const teacherController = require('./controllers/teacher-controller')

require('./db')

Api.get('/', (req, res) => {
    res.send('It Works!');
});

Api.get('/teachers/all', teacherController.getAll)

module.exports = Api