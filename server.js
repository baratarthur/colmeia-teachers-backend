'use strict'

const dotenv = require('dotenv')
const morgan = require('morgan')
const Express = require('express')
const routes = require('./app')

dotenv.config()
const App = Express()

App.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' == req.method) {
      res.send(200);
    }
    else {
      next();
    }
})
App.use(routes);

App.use(morgan('dev'))
App.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError')
        res.status(401).send('Missing authentication credentials.')
})

App.listen(process.env.PORT, () => {
    console.log(`App initiated at port ${process.env.PORT}`)
})