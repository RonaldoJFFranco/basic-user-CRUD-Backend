const UsersManager = require('../models/users-model')

class UsersController {
    constructor() {
        this.usersManager = new UsersManager();
    }

    findUserByCod(obj, cb) {
        this.usersManager.findUserByCod(obj, (err, user) => {
            if (err) {
                console.error(`Error getting user: ${err}`)
                return cb(err)
            }
            if (!user) {
                return cb({ message: 'User not found!' })
            }
            return cb(null)
        })
    }

    getAllUsers(cb) {
        this.usersManager.getAllUsers(cb)
    }

    createUser(newUser, cb) {
        this.usersManager.createNewUser(newUser, cb)
    }

    updateUser(obj, cb) {
        this.usersManager.updateUser(obj, cb)
    }

    removeUser(id, cb) {
        this.usersManager.removeUser(id, cb)
    }
}

module.exports = UsersController