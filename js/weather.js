const API_KEY = "6a2c58e045ecf3b2b26c0d6c75d3d9ed" // 지워야 함.

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(`You live in ${lat} ${lon}`);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);