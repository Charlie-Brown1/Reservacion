'use strict'

const routes = require('express').Router()

const { guardarFactura, eliminarFactura} = require('../../controllers/facturaCtrl')

routes.route('/addFactura').post(guardarFactura)

routes.route('/deleteFactura').delete(eliminarFactura)    

module.exports = routes