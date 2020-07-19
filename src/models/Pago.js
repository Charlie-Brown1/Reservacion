const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pago = new Schema({


    id_pago: {
        type: String,
        require: true

    },
    Tipo_comprobante: {
        type: String,
        require: true
    },

    Num_comprobante: {
        type: Number,
        required: true
    },

    Total_pago: {
        type: Number,
        required: true

    },
    Fecha_pago: {
        type: Date,
        default: new Date()
    }

})
module.exports = mongoose.model('Pago', Pago)
