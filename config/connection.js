const mysql = require('mysql');
const express = require ('express');
const app = express();
const dotenv = require('dotenv').config();
const util = require('util');
const fs = require('fs');

const PORT = process.env.PORT || 3000;
const myPassword = process.env.MYSQL_PASSWORD;


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: myPassword,
    database: 'burgers_db',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
  });

  connection.promisifiedQuery = util.promisify(connection.query);

  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

  module.exports = connection;
