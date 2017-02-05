//http://stackoverflow.com/questions/14592799/object-array-group-by-an-element/14593003
//require express
var express = require('express');
var path = require('path');
var connection = require('../app/db');

//Router Object
var router = express.Router();

module.exports = router;
router.get('/', function (req, res) {
    jobs = [];
    var x = {};
    var query = '   select category_id,title,name as category_name,company_name,created_at from posts p \
                    inner join categories c \
                    on p.category_id = c.id \
                    order by category_id'

    connection.query(query, function (err, rows, fields) {
        if (!err) {
            rows.forEach(function (entry) {
                //console.log(entry);
                var key = entry.category_name;
                if (typeof(x[key]) == "undefined") x[key] = [];
                x[key].push({'title': entry.title, 'company_name': entry.company_name});
            });
            res.render('pages/index', {'jobs': x})

        } else
            console.log('Error while performing Query.');
    });

})

router.get('/about', function (req, res) {
    res.send('This is About Page');
})
