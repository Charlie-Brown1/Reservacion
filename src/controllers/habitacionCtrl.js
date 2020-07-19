'use strict'

function agregarHabitacion (req, res) {
    console.log("datos de la habitacion", req.body)
    res.json({message: 'habitacion ingresada'})
}

function editarHabitacion(req, res) {
    const { params, body } = req
    console.log("el id para identificar", params)
    console.log("la informacion a reemplazar", body)
    res.json({message: 'habitacion editada'})
}

function eliminarHabitacion(req, res) {
    console.log("se eliminara la habitacion", req.params)
    res.json({message: 'habitacion eliminada'})
}

module.exports = {
    agregarHabitacion,
    editarHabitacion,
    eliminarHabitacion
}