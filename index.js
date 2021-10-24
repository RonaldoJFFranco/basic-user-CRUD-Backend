const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const usersRoutes = require('./routes/users-routes')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json())
app.get('/', (req, res) => res.status(200).send('PONG'))

app.use('/users', usersRoutes)

app.listen(port, () => console.log(`Running API on port ${port}`))