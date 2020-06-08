const AUTH = 'auth'
const jwtAuth = require('../../../auth')
const bcrypt = require('bcrypt')

module.exports = function(injectedStore){
    let store = injectedStore
    if(!store){
        store = require('../../../store/dummy')
    }

    async function login(username, password){
        const data = await store.query(AUTH,{ username: username})

        const passwordValid = await bcrypt.compare(password, data.password)
        if(passwordValid){
            // Generar Token
            return jwtAuth.sign(data)
        } else {
            throw new Error('Información Invalida')
        }
    }

    async function upsert(data){
        const authData = {
            id: data.id
        }

        if(data.username){
            authData.username = data.username
        }

        if(data.password){
            authData.password = await bcrypt.hash(data.password, 5)
        }

        return store.upsert(AUTH, authData)
    }

    return {
        upsert,
        login
    }
}