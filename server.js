const express = require('express');
const routes = require('./src/routes')
const app = express();
const port = process.env.PORT || 4444;
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

app.use(routes);

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({ ...error, message: error.message })

});

app.listen(port, (err) => {
    if (err) return console.log(`Não iniciou ${err}`)
    console.log('Running on port', port)
})