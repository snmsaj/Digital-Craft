const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    db.any('SELECT title, body, date_created, date_updated FROM blogs')
    .then(blogs => {
        res.render('index', {blogs:blogs});
    })
})

router.get('/add-blog', (req, res) => {
    res.render('add-blog');
})

router.post('/add-blog', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const isPublished = req.body.isPublished == "on" ? true : false;

    db.none('INSERT INTO blogs(title, body, is_published) VALUES($1, $2, $3)', [title, body, isPublished])
    .then(() => {
        res.redirect('/');
    })
})

module.exports = router;