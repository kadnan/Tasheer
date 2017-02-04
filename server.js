

var express = require('express');
var mysql = require('mysql');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

/**
 * Making MySQL Connection
 */

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Tasheer'
});
connection.connect(null, function () {
    console.log('Connected Successfully')
    isDbConnected = true;
})

// use ejs and express Layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

var router = require('./app/routes');
app.use('/', router);


//set assets
app.use(express.static(__dirname + '/public'))
app.listen(port, function () {
    console.log('Server is running on PORT ' + port)
});
