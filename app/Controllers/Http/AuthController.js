'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with auths
 */
const User = use('App/Models/User');

class AuthController {


    async login({ auth, request, response }) {

        const { email, password } = request.all();
        const user = await auth.attempt(email, password);

        return response.json(user);
    }



    async register({ auth, request, response }) {

        const user = new User;

        user.username = request.input('username');
        user.email = request.input('email');
        user.password = request.input('password');

        await user.save();

        return response.status(200).json(user);
    }


}

module.exports = AuthController