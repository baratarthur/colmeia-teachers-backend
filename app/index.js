'use strict'

const Api = require('express')()

Api.get('/', (req, res) => {
    res.send('It Works!');
});

module.exports = Api