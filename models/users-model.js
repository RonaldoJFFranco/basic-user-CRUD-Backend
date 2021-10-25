const MSSQL = require('../databases/mssql')

class UsersManager extends MSSQL {
    constructor() {
        // Replace with your bank settings here!
        // const config = {
        //     server: '127.0.0.1',
        //     port: 3306,
        //     database: 'teste_crud',
        //     password: 'password',
        //     user: 'user',
        //     tableName: 'Users'
        // }
        super(config)
    }

    createNewUser(newUser, cb) {
        this.operation(newUser, 'create', (err, result) => {
            if (err) cb(err)
            cb(null, "User created!")
        });
    }

    updateUser(userData, cb) {
        this.operation(userData, 'update', (err, result) => {
            if (err) cb(err)
            if (!result[0].changedRows) {
                cb({ message: "ID not finded!" })
            } else {
                cb(null, "User updated!")
            }
        });
    }

    getAllUsers(cb) {
        this.operation(undefined, 'findAll', cb)
    }

    findUserByCod(obj, cb) {
        this.operation({ cod: obj.cod }, 'findUserByCod', (err, result) => {
            if (err) cb(err)
            cb(null, result[0])
        })
    }

    removeUser(obj, cb) {
        this.operation(obj, 'delete', (err, result) => {
            if (err) cb(err)
            if (!result[0].affectedRows) {
                cb({ message: "ID not finded!" })
            } else {
                cb(null, "User removed!")
            }
        });
    }
}

module.exports = UsersManager