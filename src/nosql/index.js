const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5432,
})

const getData = (request, response) => {
    pool.query('SELECT * FROM jsondt', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getData,
}