const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

router.get('/register', (req, res) => {
    res.render('register')
})

router.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    bcrypt.genSalt(10, function (error, salt) {
        bcrypt.hash(password, salt, function (error, hash) {
            if (!error) {
                db.none('INSERT INTO users(username, password) VALUES($1, $2)', [username, hash])
                    .then(() => {
                        res.redirect('/login')
                    })
            }
        })
    })
})


router.get('/', (req, res) => {
    res.render('login')
})

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.one('SELECT user_id, username, password FROM users WHERE username = $1', [username])
        .then((user) => {
            bcrypt.compare(password, user.password, function (error, result) {
                if (result) {
                    if (req.session) {
                        req.session.userId = user.user_id
                        req.session.username = user.username
                    }
                    res.redirect('/my-blogs')
                } else {
                    res.render('login', { messege: 'Invalid username or password' })
                }
            })
        })
})

module.exports = router;