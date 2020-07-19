const Reserva = new Schema({

    Id_Reserva: {
        type: String,
        required: true
    },
    Fecha_ingreso: {
        type: Date,
        required: true
    },
    Fecha_salida: {
        type: Date,
        required: true
    },
    Fecha_reserva: {
        type: Date,
        required: true
    },
    Numero_niños: {
        type: Int,
        required: true

    },
    Numero_dultos: {
        type: Int,
        required: true
    },
    Tipo_reserva: {
        type: String,
        required: true

    },
    Costo_Alojamiento: {
        type: String,
        required: true
    },
    Estado: {
        type: String,
        required: true
    },
    habitacion : { 
        type: Schema.ObjectId, ref: "Habitacion"
    },
    cliente : { 
        type: Schema.ObjectId, ref: "Client"
    },
    trabajador : {
        type: Schema.ObjectId, ref: "Trabajador"
    }

})