const db = {
    'user':[
        {id: '1', name: 'Raul Palacios'},
        {id: '2', name: 'Milito Palacios'}
    ]
}

async function list(table){
    return db[table]
}

async function get(table, id){
    let collection = await list(table)
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data){
    let collection = await list(table)
    db[collection].push(data)
}

async function remove(table, id){
    return true
}

module.exports = {
    list,
    get,
    upsert,
    remove
}