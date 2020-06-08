const jwt = require('jsonwebtoken')
const config = require('../config')
const secret = config.jwt.secret
const error = require('../utils/error')

function sign(data){
    return jwt.sign(data, secret)
}

function verifyToken(token){
    return jwt.verify(token, secret)
}

const check = {
    own: function(req, owner){
        const decoded = decodeHeader(req)

        if(decoded.id !== owner){
            throw error('No puedes hacer esto', 401)
        }
    }
}

function getToken(authorization){
    // Bearer laksjdalksd
    if(!authorization){
        throw new Error('No existe el token')
    }
    if(authorization.indexOf('Bearer ') === -1){
        throw new Error('El formato es invalido')
    }

    let token = authorization.replace('Bearer ', '')

    return token
}
function decodeHeader(req){
    const authorization = req.headers.authorization || ''
    const token = getToken(authorization)
    const decoded = verifyToken(token)

    req.user = decoded

    return decoded
}

module.exports = {
    sign,
    check
}