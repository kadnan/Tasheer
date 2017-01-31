var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var port = 3000;

// use ejs and express Layouts
app.set('view engine','ejs')
app.use(expressLayouts)

var router = require('./app/routes');
app.use('/', router);


//set assets
app.use(express.static(__dirname + '/public'))
app.listen(port, function () {
    console.log('Server is running on PORT ' + port)
});