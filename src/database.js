var mysql = require('mysql');
var { promisify } = require('util');


var {database} = require('./keys');

var search = mysql.createPool(database);

search.getConnection((err,connection) => {
    if (err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATA BASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('HAS TOO MANY CONNECTIONS');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATA BASE CONNECTION WAS REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('DATABASE CONNECTED');

    return;
});

search.query = promisify(search.query);

module.exports = search;