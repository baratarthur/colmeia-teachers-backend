'use strict'

const dotenv = require('dotenv')
const morgan = require('morgan')
const Express = require('express')
const routes = require('./app')

dotenv.config()
const App = Express()

App.use(routes);

App.use(morgan('dev'))
App.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError')
        res.status(401).send('Missing authentication credentials.')
})

App.listen(process.env.PORT, () => {
    console.log(`App initiated at port ${process.env.PORT}`)
})