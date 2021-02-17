const connection = require('./connection');

const orm = {
    selectAll(){
        const query = 'SELECT burger_name FROM burgers';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.log(res);
        });
    },
    insertOne(){
        const query = 'INSERT INTO burgers SET ?';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.log(res);
        })
    }

}

module.exports = {orm}