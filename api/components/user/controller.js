const USER = 'user'
const { nanoid } = require('nanoid')
const auth = require('../../components/auth')

module.exports = function(injectedStore){
    let store = injectedStore
    if(!store){
        store = require('../../../store/dummy')
    }

    function list(){
        return store.list(USER)
    }

    function get(id){
        return store.get(USER, id)
    }

    async function upsert(body){
        const user = {
            name: body.name,
            username: body.username
        }
        if(body.id){
            user.id = body.id
        } else {
            user.id = nanoid()
        }

        if(body.password || body.username){
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }
        return store.upsert(USER, user)
    }

    return {
        list,
        get,
        upsert
    }
}