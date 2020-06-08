const db = {
    'user':[
        {id: '1', name: 'Raul Palacios'},
        {id: '2', name: 'Milito Palacios'}
    ]
}

async function list(table){
    return db[table] || [];
}

async function get(table, id){
    let collection = await list(table)
    return collection.filter(item => item.id === id)[0] || null;
}

async function upsert(table, data){
    if(!db[table]){
        db[table] = []
    }
    db[table].push(data)
    console.log(db)

    return data
}

async function remove(table, id){
    return true
}

async function query(table, content){
    let collection = await list(table)
    let keys = Object.keys(content)
    let key = keys[0]

    return collection.filter(item => item[key] === content[key])[0] || null;
}
module.exports = {
    list,
    get,
    upsert,
    remove,
    query
}