'use strict'

const Factura = require('../models/Factura')


async function guardarFactura(req, res) {
    console.log("se agregara la factura!!", req.body)
    const { tipoComprobante, numeroComprobante, totalPago, fechaPago, cliente, trabajador } = req.body
    // cliente === idCliente
    // trabajador === idTrabajador
    try {
        const newFactura = new Factura({
            tipoComprobante,
            numeroComprobante,
            totalPago, 
            fechaPago,
            cliente,
            trabajador
        })
        console.log("este es el modelo : " , newFactura)
        await newFactura.save()

        res.json({message : 'nueva factura ingresada'})

    }catch(error) {
        console.log(`there was an error : ${error}`)
    }
}

function eliminarFactura(req, res) {
    console.log("se eliminara la factura", req.params)
}

module.exports = {
    guardarFactura,
    eliminarFactura
}