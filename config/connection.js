const mysql = require('mysql');
const PORT = process.env.PORT || 3000;
const password = require('password.js');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: password,
    database: 'workforce_DB',
  });
  
  connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
  });
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
