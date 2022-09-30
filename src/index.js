const express = require('express')
const handleBars = require('express-handlebars')
const bodyParser = require('body-parser')
const Unit = require('../models/Unit')
const admin = require('../routes/admin')
const path = require('path')
const app = express();

    //Body Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    // Config
        // Template Engine
        app.engine('handlebars', handleBars.engine({defaultLayout: 'main',
        runtimeOptions: {
            allowProtoPropertiesByDefault: true,
            allowProtoMethodsByDefault: true,
        }
    }))
        app.set('view engine', 'handlebars')

    //Public
        app.use(express.static(__dirname + './public'))
    //Route
        app.get('/', function(req, res) {
            Unit.findAll({order: [['id', 'DESC']]}).then(function(lists) {
                res.render('./layouts/main', {lists: lists})
            })
        })

        app.get('/add', function (req, res) {
            res.render('form')
        })

        app.post('/formAdd', function(req, res) {
            Unit.create({
                unidade: req.body.unidade,
                urlAgenda: req.body.url,
            }).then(function() {
                res.send('Sucesso!')
            }).catch(function(erro) {
                res.send("Erro!", erro)
            })

        })

        app.use('/admin', admin)

        app.listen(8081, function() {

            console.log('Running at localhost')

        })