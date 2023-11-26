var APIKey = '8cc7cf2e740792b898cecd92170389f2';
var searchForm = document.getElementById('search-form');
var latitude;
var longitude;
var cityValue;
var cityList;
var cityListEl = document.getElementById('city-list');

function handleSearch(event) {
    event.preventDefault();
    cityValue = document.getElementById('city-input').value;

    console.log(cityValue);

    getGeoCode(cityValue);
    createList(cityValue);
}

function createList(city) {
    var cityLi = document.createElement('li');
    cityLi.textContent = city;
    cityListEl.appendChild(cityLi);
}

searchForm.addEventListener('submit', handleSearch);

function getGeoCode(city) {
    var geoQueryURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=' + 1 + '&appid=' + APIKey + '&units=imperial';

    fetch(geoQueryURL)
        .then(function (response) { return response.json() })
        .then(function (data) {
            console.log(data);
            latitude = data[0].lat;
            longitude = data[0].lon;
            console.log(latitude);
            console.log(longitude);

            updateWeatherQuery(latitude, longitude);
        });
}

function updateWeatherQuery(latitude, longitude) {
    var weatherQueryURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + APIKey + '&units=imperial';
    console.log(weatherQueryURL);

    getWeather(weatherQueryURL);
}

function getWeather(weatherQueryURL) {
    fetch(weatherQueryURL)
        .then(function(response) { return response.json() })
        .then(function(data) {
            console.log(data);
        });
}

