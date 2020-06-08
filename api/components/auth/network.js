const express = require('express')
const response = require('../../../network/response.js')
const Controller = require('./index')
const router = express.Router()

router.post('/login', login)

async function login(req, res){
    try {
        const token = await Controller.login(req.body.username, req.body.password)
        console.log(token)
        response.success(req, res, token, 200)
    } catch (error) {
        console.log(error)
        response.error(req, res, 'Información Invalida', 400)
    }
}

module.exports = router