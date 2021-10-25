# basic-user-CRUD-Backend

To create the database use the comands:

npx sequelize db:create <br />
npx sequelize db:migrate

In the 'models\users-model.js' add your use database configuration: <br />
const config = {<br />
&nbsp;&nbsp;&nbsp;&nbsp;server: '',<br />
&nbsp;&nbsp;&nbsp;&nbsp;port: ,<br />
&nbsp;&nbsp;&nbsp;&nbsp;database: '',<br />
&nbsp;&nbsp;&nbsp;&nbsp;password: '',<br />
&nbsp;&nbsp;&nbsp;&nbsp;user: '',<br />
&nbsp;&nbsp;&nbsp;&nbsp;tableName: 'Users'<br />
}
<br /><br />
And in the 'config\config.json' to:<br />
"development": {<br />
&nbsp;&nbsp;&nbsp;&nbsp;"username": "",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"password": "",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"database": "teste_crud",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"host": "127.0.0.1",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"dialect": "mysql"<br />
}


