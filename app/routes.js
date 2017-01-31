//require express
var express = require('express');
var path = require('path');

//Router Object
var router = express.Router();

module.exports = router;
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'../index.html'))
    res.render('pages/index')
})

router.get('/about', function (req, res) {
    res.send('This is About Page');
})
