const db = require('./src/sql')
const ndb = require('./src/nosql')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

// SQL end points
app.get('/users', db.getUsers)
app.get('/users/:id', db.getUsersByID)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

// noSQL end points
app.get('/data', ndb.getData)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})