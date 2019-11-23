'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ViajeSchema extends Schema {
    up() {
        this.create('viajes', (table) => {
            table.increments()
            table.string('email', 50).nullable()
            table.string('origen', 25).nullable()
            table.string('destino', 25).nullable()
            table.string('fIda').nullable()
            table.string('fVuelta').nullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('viajes')
    }
}

module.exports = ViajeSchema