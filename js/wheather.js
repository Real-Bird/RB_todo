const API_KEY = "18ee40c103df7bb95e219b9667719140";
const weatherDiv = document.querySelector("#weather");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#firstspan");
      const weather = document.querySelector("#secondspan");
      const weatherIcon = document.querySelector("#weatherimg");
      const temper = parseInt(data.main.temp);
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weatherIcon.className = "icon";
      weatherIcon.src = iconUrl;
      weather.innerText = `current: ${temper}˚`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
