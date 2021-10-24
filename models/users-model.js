const MSSQL = require('../databases/mssql')

class UsersManager extends MSSQL {
    constructor() {
        const config = {
            server: '127.0.0.1',
            port: 3306,
            database: 'teste_crud',
            password: 'Ron@aldo123',
            user: 'root',
            tableName: 'Users'
        }
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

    findUser(obj, cb) {
        this.operation(obj, 'findUser', (err, result) => {
            if (err) cb(err)
            cb(null, result[0])
        })
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