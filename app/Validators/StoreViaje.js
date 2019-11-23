'use strict'

class StoreViaje {
    get rules() {
        return {
            // validation rules
            email: 'required',
            origen: 'required',
            destino: 'required',
            fIda: 'required',
            fVuelta: 'required'
        }
    }

    get messages() {
        return {
            'email.required': 'El campo email es requerido',
            'origen.required': 'El campo origen es requerido',
            'destino.required': 'El campo destino es requerido',
            'fIda.required': 'El campo fIda es requerido',
            'fVuelta.required': 'El campo fVuelta es requerido'
        }
    }
}
module.exports = StoreViaje