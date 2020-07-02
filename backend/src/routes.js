const express = require('express')
const routes = express.Router()
const ongcontroller = require('./controllers/ongController')
const incicontroller = require('./controllers/incidentController')
const sessioncontroler = require('./controllers/sessioncontroller')

routes.post('/sessions', sessioncontroler.create)
routes.get('/ongs',ongcontroller.listar)
routes.post('/ongs', ongcontroller.create)
routes.post('/incidents', incicontroller.create)
routes.get('/incidents', incicontroller.listar)
routes.delete('/incidents/:id', incicontroller.delete)
routes.get('/profile', incicontroller.indexOf)

module.exports = routes