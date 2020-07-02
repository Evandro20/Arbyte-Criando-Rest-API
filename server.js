const express = require('express');
const app = express();
const port = process.env.PORT || 4444;

app.get('', (req, res) => {
    res.json({
        message: "Funcionou",
    })
})

app.listen(port, err => {
    if (err) return console.log(`Não iniciou ${err}`)
    console.log('Running on port', port)
})