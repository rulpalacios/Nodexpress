const { Pool, Client } = require('pg')
const config = require('../config')

const pool = new Pool({
    user: config.pg.user,
    host: config.pg.host,
    database: config.pg.database,
    password: config.pg.password,
    port: config.pg.port
})

async function list(table){
    try {
        const res = await pool.query(`SELECT * FROM ${table}`)

        return res.rows
    } catch (error) {
        return error
    }
}

async function get(table, id){
    try{
        const res = await pool.query(`SELECT * FROM ${table} WHERE id = ${id}`)
        return res.rows[0]
    } catch(error){
        return error
    }
}

async function insert(table, data){
    const query = {
        text: `INSERT INTO ${table}(${data}) SELECT * FROM ${table}`,
        
    }
    try {
        const res = await pool.query(`INSERT INTO ${table}(${data}) SELECT * FROM ${table}`)
        return res.rows[0]
    } catch (error) {
        return error.stack
    }
}
function upsert(table, data){
    return insert(table, data)
}
module.exports = {
    list,
    get,
    upsert
}