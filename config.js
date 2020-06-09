module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'fullsecret'
    },
    pg: {
        user: process.env.PG_USER || 'postgres',
        host: process.env.PG_HOST || '127.0.0.1',
        database: process.env.PG_DB || 'nodexpress',
        password: process.env.PG_PASS || '',
        port: process.env.PG_PORT || '5432'
    }
}