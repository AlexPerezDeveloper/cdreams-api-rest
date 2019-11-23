'use strict'

class StoreUser {
    get rules() {
        return {
            // validation rules
            username: 'required',
            email: 'required|unique:users,email',
            password: 'required'
        }
    }
    get messages() {
        return {
            'username.required': 'El campo usuario es requerido',
            'email.required': 'El campo email es requerido',
            'email.unique': 'El campo email ya existe',
            'password.required': 'El campo password es requerido'
        }
    }
}

module.exports = StoreUser