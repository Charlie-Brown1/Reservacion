'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Persona = new Schema ({

    nombre: {
        type: String,
        requiere: true
    },
    apellido: {
        type: String,
        default: true
    },
    tipoDocumento: {
        type: String, 
        requiere: true
    },
    numeroDocumento: {
        type: Number,
        requiere: true
    },
    telefono: {
        type: Number,
        default: true
    }
})



module.exports = mongoose.model('Persona', Persona)