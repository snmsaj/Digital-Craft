const cityTextBox = document.getElementById("cityTextBox");
const searchCityBtn = document.getElementById("searchCityBtn");
const weatherDiv = document.getElementById("weatherDiv")


// CALLS WEATHER FROM THE API
function getWeather(city, callback) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7d5fd222b95a49ae88b8165cf2a0076d&units=imperial`)
    .then((response) => {
        return response.json()
    }).then((weather) => {
        callback(weather)
    })
}

// DISPLAYS WEATHER
function displayWeather(city, weather) {
    let weatherItem = `<h3>${city} </h3>
                        <p>Max Temp: ${weather.main.temp_max}\xB0F</p>
                        <p>Min Temp: ${weather.main.temp_min}\xB0F</p>
                        <p>Pressure: ${weather.main.pressure} psi</p>`

    weatherDiv.innerHTML = weatherItem
}


// BUTTON WILL CALL FUNCTIONS
searchCityBtn.addEventListener('click', function() {
    let city = cityTextBox.value
    getWeather(city, function(weather) {
        displayWeather(city, weather)
    })
})