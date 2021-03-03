const moviesDIV = document.getElementById("moviesDIV")
const movieDetailsDIV = document.getElementById("movieDetailsDIV")
const moviesURL = "http://www.omdbapi.com/?s=batman&apikey=21ead322"


let request = new XMLHttpRequest()

request.addEventListener("load", function() {
    let movieList = JSON.parse(this.responseText)

    let movieListItems = movieList.Search.map(function(movie) {
        return `<div>
                    <img src="${movie.Poster}">
                    <p>${movie.Title}</p>
                    <button onclick="getMovieDetails('${movie.imdbID}')">Show Details</button>
                </div>`
    })
    moviesDIV.innerHTML = movieListItems.join("")
})


function getMovieDetails(imdbID) {
    let movieDetailRequest = new XMLHttpRequest()

    movieDetailRequest.addEventListener("load", function() {
        const movieDetail = JSON.parse(this.responseText)
        const movieDetailItem = `<div>
                                    <h2>Title: ${movieDetail.Title}</h2>
                                    <img src="${movieDetail.Poster}">
                                    <h3>Year: ${movieDetail.Year}</h3>
                                    <h3>Rated: ${movieDetail.Rated}</h3>
                                    <h3>Released: ${movieDetail.Released}</h3>
                                    <h3>Director: ${movieDetail.Director}</h3>
                                </div>`

        movieDetailsDIV.innerHTML = movieDetailItem
    })
    

    movieDetailRequest.open("GET", `http://www.omdbapi.com/?i=${imdbID}&apikey=21ead322`)
    movieDetailRequest.send()
}



request.open("GET", moviesURL)
request.send()