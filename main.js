const api = {
    key: "cf8e91309cd2d240fc0c4d92ec931574",
    baseurl:"https://api.openweathermap.org/data/2.5/"
}

const seachbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);


function setQuery(evt) {
    if (evt.keycode == 13) {
        getResults(searchbox.value);
    }
}


function getResult(query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (query) {
    console.log(weather);
    let city = document.querySelector('.location .city'); city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
    }

    function dateBuilder (d) {
        
    }
}