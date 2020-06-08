const express = require('express')
const response = require('../../../network/response.js')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)

async function list(req, res){
    let users
    try{
        users = await Controller.list()
        response.success(req, res, users, 200)
    } catch(err){
        response.error(req, res, err.message, 500)
    }
}

async function get(req, res){
    let user
    try{
        user = await Controller.get(req.params.id)
        response.success(req, res, user, 200)
    } catch(err){
        response.error(req, res, err.message, 500)
    } 
}

module.exports = router