# basic-user-CRUD-Backend
Set this configurations please to define the database
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
&nbsp;&nbsp;&nbsp;&nbsp;"host": "",<br />
&nbsp;&nbsp;&nbsp;&nbsp;"dialect": "mysql"<br />
}

And now to create the database use these comands:

npx sequelize db:create <br />
npx sequelize db:migrate


