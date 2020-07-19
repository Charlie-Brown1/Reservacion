'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Factura = new Schema({
    idFactura: {type: String, 
        requiere: true
    },
    tipoComprobante: {
        type: String, 
        requiere: true
    },
    numeroComprobante: {
        type: String,
        requiere: true
    },
    totalPago: {
        type: Number,
        default: new Date()
    },
    fechaPago: {
        type: Date,
        default: new Date()
    },

    cliente : { 
        type: Schema.ObjectId, ref: "Client"
    },

    trabajador : {
        type: Schema.ObjectId, ref: "Trabajador"
    }
})

module.exports = mongoose.model('Factura', Factura)