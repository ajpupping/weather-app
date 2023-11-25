var APIKey = '8cc7cf2e740792b898cecd92170389f2';
var city = document.getElementById('city-input');
var state = state;
var country = country;

// for testing
city = 'san diego'

var weatherQueryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;
var geoQueryURL = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=' + 5 + '&appid=' + APIKey;

function getGeoCode() {
    fetch(geoQueryURL)
        .then(function (response) { return response.json() })
        .then(function (data) {
            // for testing    
            console.log(data);
        });
}


function getWeather() {
    fetch(weatherQueryURL)
        .then(function (response) { return response.json() })
        .then(function (data) {
            // for testing    
            console.log(data);
        });
}

getWeather();

getGeoCode()

