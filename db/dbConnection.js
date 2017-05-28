/**
 * Created by buwan on 5/22/2017.
 */

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'reservation_app'
});

var mysqlDB = function () {

};

mysqlDB.initConnection = function () {
    connection.connect();
    console.log('Mysql Db Connection created');
    console.log("Connection status " + connection.state);
};

mysqlDB.getConnection = function () {
    if (connection.state == 0) {
        mysqlDB.initConnection();
    }
    return connection;
};

module.exports = mysqlDB;