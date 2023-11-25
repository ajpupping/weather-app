var APIKey = '8cc7cf2e740792b898cecd92170389f2';
var city = document.getElementById('city-input');

// for testing
city = 'san diego'

var queryURL = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + APIKey;


function getWeather() {
    fetch(queryURL)  
    .then(function(response) { return response.json() })
    .then(function(data) {
    // for testing    
    console.log(data);
    });
}

getWeather();

