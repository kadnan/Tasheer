var express = require('express');
var connection = require('./app/db');
var expressLayouts = require('express-ejs-layouts');
var bodyParser = require('body-parser');
var app = express();
var port = 3000;

// use Body Parser

app.use(bodyParser.urlencoded({ extended: true }));
/**
 * Making MySQL Connection
 */

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
