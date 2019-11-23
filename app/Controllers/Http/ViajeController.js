'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with viajes
 */

const Viaje = use('App/Models/Viaje');

class ViajeController {
    /**
     * Show a list of all viajes.
     * GET viajes
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        let viajes = await Viaje.all();
        return response.json(viajes);
    }



    /**
     * Create/save a new viaje.
     * POST viajes
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response }) {

        const viajeInfo = request.only(['email', 'origen', 'destino', 'fIda', 'fVuelta']);
        const viaje = new Viaje;

        viaje.email = viajeInfo.email;
        viaje.origen = viajeInfo.origen;
        viaje.destino = viajeInfo.destino;
        viaje.fIda = viajeInfo.fIda;
        viaje.fVuelta = viajeInfo.fVuelta;

        await viaje.save();
        return response.status(201).json(viaje);

    }

    /**
     * Display a single viaje.
     * GET viajes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, response }) {

        let viaje = await Viaje.find(params.id);

        if (!viaje) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        return response.json(viaje);


    }


    /**
     * Update viaje details.
     * PUT or PATCH viajes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async update({ params, request, response }) {}

    /**
     * Delete a viaje with id.
     * DELETE viajes/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {

        const viaje = await Viaje.find(params.id);

        if (!viaje) {
            return response.status(404).json({ data: "Recurso no encontrado" });
        }

        await viaje.delete();

        return response.status(204).json({ data: "Recurso eliminado correctamente" });
    }
}

module.exports = ViajeController