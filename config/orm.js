const connection = require('./connection');

const orm = {
    selectAll(tableName, cb){
        const queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    },
    insertOne(tableName, colName, val, cb){
        const queryString = `INSERT INTO ${tableName} (${colName}) VALUES ("${val}")`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log('This is my ' + queryString);
            cb(res);
        });
    },
    updateOne(tableName, colName, boolean, condition, cb){
        const queryString = `UPDATE ${tableName} SET ${colName} = ${boolean} WHERE ${condition}`;
        connection.query(queryString, (err, res) => {
            if (err) throw err;
            console.log(res);
            cb(res);
        });
    }

}

module.exports = orm;