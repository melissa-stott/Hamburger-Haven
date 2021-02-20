const connection = require('./config/connection');
const orm = require('./config/orm');

let result = (res) => {
    console.log('This is my result' + res);
}
orm.selectAll('burgers', result);
orm.insertOne('burgers', 'burger_name', 'Little Bacon Burger', result);
orm.updateOne('burgers', 'devoured', false, 'id=1', result);
