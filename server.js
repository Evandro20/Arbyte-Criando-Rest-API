const express = require('express');
const routes = require('./src/routes')
const app = express();
const port = process.env.PORT || 4444;

app.use(routes);

app.listen(port, err => {
    if (err) return console.log(`Não iniciou ${err}`)
    console.log('Running on port', port)
})