const express = require('express');
const router = express.Router();
const {v4:uuidv4} = require('uuid');

router.get('/', (req, res) => {
    res.render('login');
})

// Login and check if username exists
router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const persistedUser = userList.find((user) => {
        return user.username == username && user.password == password;
    })

    if(persistedUser) {
        if(req.session) {
            req.session.username = username
        }
        res.redirect('/trips')
    }else {
        res.render('login', {message: "Username or password is incorrect"})
    }
})

router.get('/add-user', (req, res) => {
    res.render('add-user');
})

router.post('/add-user', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    let user = {username:username, password:password, userId:uuidv4()};

    userList.push(user);
    res.redirect('/');
})

module.exports = router;