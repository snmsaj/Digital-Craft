const express = require('express')
const cors = require('cors')
const app = express() 

app.use(cors())
app.use(express.json())


const booksRouter = require('./routes/books.js')
app.use('/books', booksRouter)

app.listen(8080, () => {
    console.log('Server is running...')
})