const express = require('express')
const app = express()
const mustacheExpress = require('mustache-express')

app.engine('mustache', mustacheExpress()) // setting up mustache as a templating engine 
app.set('views', '/views') // the pages are located in the views directory
app.set('view engine', 'mustache') // extension for all the pages 

app.get('/', (req, res) => {
    res.render(index)
})

app.listen(3000, () => {
    console.log('Server is running...')
})