const db = require('./queries')
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
        info: 'Node.js, Express, and Postgres API',
        // commands: 
        //     'http://localhost:3000/users => get, post all users \n
        //      http://localhost:3000/users/<id> => get all users \n'
        // // app.get('/users/:id', db.getUsersByID)
        // // app.post('/users', db.createUser)
        // // app.put('/users/:id', db.updateUser)
        // // app.delete('/users/:id', db.deleteUser)'
    })
})

app.get('/users', db.getUsers)
app.get('/users/:id', db.getUsersByID)
app.post('/users', db.createUser)
app.put('/users/:id', db.updateUser)
app.delete('/users/:id', db.deleteUser)

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})