const express = require("express");
const router = express.Router();
const models = require("../models");

router.get('/', (req, res) => {
    models.Book.findAll({     
    }).then((books) => {
        res.json(books)
    })
})

router.post('/', (req, res) => {
    const title = req.body.title
    const genre = req.body.genre
    const author = req.body.author
    const year = req.body.year
    const imageURL = req.body.imageURL

    let book = models.Book.build({
        title: title,
        genre: genre,
        author: author,
        year: year,
        imageURL: imageURL
    })

    book.save().then((persistedBook) => {
        console.log(persistedBook)
    })
})

module.exports = router;