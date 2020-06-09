const store = require('../../../store/postgres.js')
const controller = require('./controller')

module.exports = controller(store)