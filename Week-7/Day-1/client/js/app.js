fetch('localhost:3000/movies')
.then(response => response.json())
.then(movies => {
    const movieItems = movies.map(movie) => {
        
})