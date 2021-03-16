// Importing express into our app so we can run a server
const express = require('express')
const app = express()
const


app.use(express.json()) //Middleware
app.cors = require('cors')

// "/" is the root
app.get("/", (req,res) => {
    res.send("Hello World!")
})

// Route Parameters
// app.get("/name", (req,res) => {
//     let name = {firstname:"Shawn", lastname:"Saj"}
//     res.send(name)
// })

// the :year lets the url be anything
app.get("/digital-crafts/cohort/:year", (req, res) => {
    const year = req.params.year
    let cohortString = `I study at DigitalCrafts ${year} Cohort`
    res.send(cohortString)
})

// Filter through the json file with the url
// app.get("/movies/:genre", (req, res) => {
//     const genre = req.params.genre 

//     const filteredMovies = movies.filter((movie) => {
//         return movie.genre.toLowerCase() == genre 
//     })

//     res.json(filteredMovies)
// })

// Create post
app.post("/movies", (req, res) => {
    const name = req.body.names
    const genre = req.body.genre
    const movie = {name:name, genre:genre}
    movies.push(movie)
    res.json({message: "Movie has been added"})
})


// Start the server
app.listen(3000, () => {
    console.log("Server is running...")
})