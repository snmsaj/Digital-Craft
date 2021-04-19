const express = require('express')
const cors = require('cors')
const app = express() 

app.use(cors())
app.use(express.json())

const books = [
    {name: 'The Hobbit', genre: 'Fantasy'}, 
    {name: 'Morgan Freeman', genre: 'Biography'}, 
    {name: 'Captain Underpants', genre: 'Kids'}
]

app.get('/books', (req, res) => {
    res.json(books)
})


app.listen(8080, () => {
    console.log('Server is running...')
})