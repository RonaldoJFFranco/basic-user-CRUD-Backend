const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000
const jsonParser = bodyParser.json({limit: '50mb', extended: true}); 
const urlencodedParser = bodyParser.urlencoded({limit: '50mb', extended: true});

const usersRoutes = require('./routes/users-routes')

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => res.status(200).send('PONG'))
app.use(jsonParser);
app.use(urlencodedParser);

app.use('/users', usersRoutes)

app.listen(port, () => console.log(`Running API on port ${port}`))