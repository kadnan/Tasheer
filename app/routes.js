//http://stackoverflow.com/questions/14592799/object-array-group-by-an-element/14593003
//require express
var express = require('express');
var path = require('path');
var connection = require('../app/db');

//Router Object
var router = express.Router();

module.exports = router;

router.get('/', function (req, res) {

    var jobs = [];
    var x = {};
    var done = typeof req.query.done != 'undefined' ? req.query.done : null;

    var query = '   select p.id as postId,category_id,title,name as category_name,company_name,created_at from posts p \
                    inner join categories c \
                    on p.category_id = c.id \
                    order by category_id'

    connection.query(query, function (err, rows, fields) {
        if (!err) {
            rows.forEach(function (entry) {
                //console.log(entry);
                var key = entry.category_name;
                if (typeof(x[key]) == "undefined") x[key] = [];
                x[key].push({'id': entry.postId, 'title': entry.title, 'company_name': entry.company_name});
            });
            res.render('pages/index', {'jobs': x, 'done': done})

        } else
            console.log('Error while performing Query.');
    });

})

router.get('/about', function (req, res) {
    res.send('This is About Page');
})

// Add Job
router.get('/add', function (req, res) {
    res.render('pages/add')
})
// POST (Add Job)
router.post('/add', function (req, res) {

    var form_data;
    form_data = req.body;
    var query = 'INSERT INTO posts' +
        '(title,category_id,details,company_name,company_url,location,contact_link)' +
        'VALUES(?,?,?,?,?,?,?)'
    //console.log(req.body)
    connection.query(query, [
        form_data['title'], form_data['category_id'], form_data['details'], form_data['company_name'], form_data['company_url'], form_data['location'], form_data['contact_link']
    ])
    res.render('pages/index')
    res.writeHead(301,
        {Location: '/?done=1'}
    );
    res.end();
})

//Detail job

router.get('/detail/:id', function (req, res) {
    res.render('pages/detail')
})
