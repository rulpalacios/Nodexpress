const express = require('express')
const config = require('../config.js')
const user = require('./components/user/network')
const app = express()

app.use(express.json())

app.use('/api/user', user)

app.listen(config.api.port, () => {
    console.log('Listen at', config.api.port)
})