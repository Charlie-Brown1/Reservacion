'use strict'

const routes = require('express').Router()

const { agregarTrabajador, editarTrabajador, eliminarTrabajador } = require('../../controllers/trabajadorCtrl')

routes.route('/addTrabajador').post(agregarTrabajador)

routes.route('/editTrabajador').put(editarTrabajador)

routes.route('/deleteTrabajador').delete(eliminarTrabajador)

module.exports = routes

///EXPLICACION
// XPathExpression.router

// .get   // devolver datos
// .post // envio de datos
// .put   // permite  editar
// .delete // eliminar