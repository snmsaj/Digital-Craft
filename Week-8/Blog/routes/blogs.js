const express = require('express');
const router = express.Router();
// const authenticate = require('../js/authenticate');

function authenticate(req, res, next) {
    if(req.session) {
        if(req.session.username) {
            next()
        }else {
            res.redirect('/login')
        }
    }else {
        res.redirect('/login')
    }
}

// Renders Page for all blogs
router.get('/', (req, res) => {
    db.any('SELECT title, body, date_created, date_updated FROM blogs')
    .then(blogs => {
        res.render('index', {blogs:blogs});
    })
})

// Just shows users posts
router.get('/my-blogs', authenticate, (req, res) => {
    const userId = req.session.userId

    db.any('SELECT post_id, title, body FROM blogs where user_id = $1', [userId])
    .then(myblogs => {
        res.render('my-blogs', {myblogs: myblogs})
    })
})

// Render update blog page with values in input
router.get('/my-blogs/:postId', (req, res) => {
    const postId = req.params.postId

    db.one('SELECT post_id, title, body FROM blogs WHERE post_id = $1', [postId])
    .then(blog => {
        res.render('update-blog', {blog:blog})
    })
})

// Updates post
router.post('/my-blogs/:postId', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const postId = req.body.postId;

    db.none('UPDATE blogs SET title = $1, body = $2 WHERE post_id = $3', [title, body, postId])
    .then((update) => {
        console.log(update)
        res.redirect('/my-blogs')
    })
})

// Delete post
router.post('/my-blogs', (req, res) => {
    const postId = req.body.postId
    db.none('DELETE FROM blogs WHERE post_id = $1', [postId])
    .then(() => {
        res.redirect('/my-blogs')
    })
})



// Renders add blog page
router.get('/add-blog', authenticate,(req, res) => {
    res.render('add-blog');
})

// Posts blog data to blogs table
router.post('/add-blog', (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const isPublished = req.body.isPublished == "on" ? true : false;
    const userId = req.session.userId;

    db.none('INSERT INTO blogs(title, body, is_published, user_id) VALUES($1, $2, $3, $4)', [title, body, isPublished, userId])
    .then(() => {
        res.redirect('/my-blogs');
    })
})

module.exports = router;