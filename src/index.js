const express = require('express')
const app = express();
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const Unit = require('../models/Unit')




    // Config
        // Template Engine
        app.engine('handlebars', handleBars.engine({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    //Route
        app.get('/add', function (req, res) {
            res.render('form')
        })

        app.post('/formAdd', function(req, res) {
            Unit.create({
                unidade: req.body.unidade,
                urlAgenda: req.body.url
            }).then(function() {
                res.send('Sucesso!')
            }).catch(function(erro) {
                res.send("Erro!", erro)
            })

        })

        app.listen(8081, function() {

            console.log('Running at localhost')

        })