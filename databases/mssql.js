const { format } = require('util')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize');
class MSSQL {
    constructor(config) {
        if (!config.server || !config.user || !config.password || !config.database) {
            throw new Error("No config sent database.")
        }
        config.encrypt = true;
        if (!config.requestTimeout) {
            config.requestTimeout = 120000
        }

        this.CRUD = {
            create: {
                query: `INSERT INTO \`${config.tableName}\` (name, birthday, photo) VALUES ('%s', '%s', '%s')`,
                errMsg: `[${this.constructor.name}] >> Error on the user creation. ERROR:`,
                type: { type: QueryTypes.INSERT }
            },
            update: {
                query: `UPDATE \`${config.tableName}\` SET name = \'%s\', birthday = \'%s\', photo = \'%s\'`,
                errMsg: `[${this.constructor.name}] >> Error on the user update. ERROR:`,
                type: { type: QueryTypes.UPDATE }
            },
            findAll: {
                query: `SELECT * FROM \`${config.tableName}\` `,
                errMsg: `[${this.constructor.name}] >> Error getting data. ERROR:`,
                type: { type: QueryTypes.SELECT }
            },
            findUser: {
                query: `SELECT * FROM \`${config.tableName}\` WHERE name = \'%s\' AND birthday = \'%s\' AND photo = \'%s\'`,
                errMsg: `[${this.constructor.name}] >> Error on getting the user. ERROR:`,
                type: { type: QueryTypes.SELECT }
            },
            findUserByCod: {
                query: `SELECT * FROM \`${config.tableName}\``,
                errMsg: `[${this.constructor.name}] >> Error on gettin the user. ERROR:`,
                type: { type: QueryTypes.SELECT }
            },
            delete: {
                query: `DELETE FROM \`${config.tableName}\``,
                errMsg: `[${this.constructor.name}] >> Error on the user deletion. ERROR:`
            }
        }
        delete (config.tableName);

        this.connection = new Sequelize(config.database, config.user, config.password, {
            host: config.server,
            dialect: 'mysql'
        });
    }

    async operation(infos = undefined, type, cb) {
        if (type === "findUserByCod" || type === "delete") {
            try {
                cb(null, await this.connection.query(`${this.CRUD[type].query} WHERE cod = ${infos.cod}`, this.CRUD[type].type))
            } catch (err) {
                cb({message: `${this.CRUD[type].errMsg} ${err}`})
            }
        } else if (infos) {
            let query = format(this.CRUD[type].query, infos.name, infos.birthday, infos.photo)
            if (type === 'update') {
                query = query + `WHERE cod = ${infos.cod}`
            }
            try {
                cb(null, await this.connection.query(query, infos, this.CRUD[type].type))
            } catch (err) {
                cb({message: `${this.CRUD[type].errMsg} ${err}`})
            }
        } else {
            try {
                cb(null, await this.connection.query(this.CRUD[type].query, this.CRUD[type].type))
            } catch (err) {
                cb({message: `${this.CRUD[type].errMsg} ${err}`})
            }
        }
    }
}

module.exports = MSSQL;