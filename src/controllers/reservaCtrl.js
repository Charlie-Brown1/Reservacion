'use strict'

function agregarReserva(req, res) {
    console.log("se agregara la reserva!!")
}

function editarReserva (req, res) {
    console.log("se editara la reserva!!!")
}

function eliminarReserva(req, res) {
    console.log("se eliminara la reserva")
}

module.exports = {
    agregarReserva,
    editarReserva,
    eliminarReserva
}