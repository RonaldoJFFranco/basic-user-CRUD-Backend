# basic-user-CRUD-Backend

To create the database use the comands:

npx sequelize db:create
npx sequelize db:migrate

In the 'models\users-model.js' add your use database configuration:
const config = {
    server: '',
    port: ,
    database: '',
    password: '',
    user: '',
    tableName: 'Users'
}

And in the 'config\config.json' to:

"development": {
    "username": "",
    "password": "",
    "database": "teste_crud",
    "host": "127.0.0.1",
    "dialect": "mysql"
}


