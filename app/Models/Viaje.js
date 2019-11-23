'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Viaje extends Model {
    static get visible() {
        return ['email', 'origen', 'destino', 'fIda', 'fVuelta'];
    }
}

module.exports = Viaje