const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const pgp = require('pg-promise')();
const path = require('path');

const VIEWS_PATH = path.join(__dirname, '/views');


const connectionString = 'postgres://localhost:5432/blogdb';
global.db = pgp(connectionString);

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

app.engine('mustache',mustacheExpress(VIEWS_PATH + '/partials','.mustache'));
app.set('views','./views');
app.set('view engine','mustache');
app.use(express.urlencoded());
app.use(express.static('css'));
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
}))

const rootController = require('./routes/blogs');
app.use('/', rootController);

const loginController = require('./routes/login');
app.use('/login', loginController);

app.listen(3000, () => {
    console.log('Server is running...');
})