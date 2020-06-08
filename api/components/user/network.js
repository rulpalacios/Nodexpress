const express = require('express')
const secure = require('./secure')
const response = require('../../../network/response.js')
const Controller = require('./index')

const router = express.Router()

router.get('/', list)
router.get('/:id', get)
router.post('/', upsert)
router.put('/',secure('update'), upsert)

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

async function upsert(req, res){
    let user
    try{
        user = await Controller.upsert(req.body)
        response.success(req, res, user, 200)
    }catch(err){
        response.error(req, res, err.message, 500)
    }
}
module.exports = router