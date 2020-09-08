require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});

app.post('/usuario', (req, res) => {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            mensaje: 'Bad request'
        });
    } else {
        res.json({
            persona: body
        })
    }
})

app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
})

app.delete('/usuario', (req, res) => {
    console.log('delete usuario');
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando el puerto', 3000);
});