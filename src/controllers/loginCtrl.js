'use strict'

const Persona = require('../models/Persona')
const Trabajador = require('../models/Trabajador')


// const { validateForm } = require('../helpers/validations')

async function registerUser(req, res) {
    console.log("datos del registro : ", req.body)
    const { nombre, apellido, tipoDocumento, numeroDocumento, telefono, login, password, email } = req.body

    // if (validateForm({ nombre, apellido, tipoDocumento, numeroDocumento, telefono, login, password, email }) == false) {
    //     console.log("esta mal")
    // } else {
        try {
            const newPersona = new Persona({
                nombre,
                apellido,
                tipoDocumento,
                numeroDocumento,
                telefono,
            })

            console.log("la persona : " , newPersona)

            var result = await newPersona.save()
            if (result) {
                const newTrabajador = new Trabajador({
                    login,
                    password,
                    email,
                    persona : newPersona._id
                })

                newTrabajador.password = await newTrabajador.encryptPassword(password)
                
                await newTrabajador.save()
                console.log(`el modelo del trabajador : ${newTrabajador}` )
                res.json({ message: 'usuario registrado con exito!!!' })
            }
        } catch (error) {
            console.log(`el error : ${error}`)
        }
    // }
}

function loginUser(req, res) {
    console.log("los datos del login : ", req.body)

    res.json({ message: 'usuario logueado!!!' })

}

module.exports = {
    registerUser,
    loginUser
}