const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const app = express();

app.use(express.urlencoded());
app.use(session({
    secret: 'secretkey',
    saveUninitialized: true
}))

app.engine('mustache', mustacheExpress());
app.set('views', '/views');
app.set('view engine', 'mustache');

