//require express
var express = require('express');
var path = require('path');

//Router Object
var router = express.Router();

module.exports = router;
router.get('/', function (req, res) {
    jobs = []
    jobs.push(
        {
            'category_name': 'Programming',
            'jobs': [
                {
                    'id': 1,
                    'title': 'Senior Java Developer - Security Cleared - Java 8 - Contract',
                    'category_id': 1,
                    'company_name': 'Oracle',
                    'created_at': '2017-02-09'
                }],

        });
    //Query Jobs with Categories
    var query = "   SELECT category_id,title,name AS category_name FROM posts p \
                    INNER JOIN categories c \
                    ON p.category_id = c.id \
                    ORDER BY category_id";


    res.sendFile(path.join(__dirname, '../index.html'))

    res.render('pages/index', {'jobs': jobs})
})

router.get('/about', function (req, res) {
    res.send('This is About Page');
})
