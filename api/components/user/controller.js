const USER = 'user'

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
    return {
        list,
        get
    }
}