const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const winddata = document.querySelector('.wind')
const humiditydata = document.querySelector('.humidity')
const cityInput = document.querySelector('.city')
const yourName = document.querySelector('.name')

let citydata = localStorage.getItem('city')

function setLocal() {
  localStorage.setItem('name', yourName.value);
  localStorage.setItem('city', cityInput.value);
}
window.addEventListener('beforeunload', setLocal)

function getLocal() {

  if(localStorage.getItem('name')) {
    yourName.value = localStorage.getItem('name');
    cityInput.value = localStorage.getItem('city');
  }
}
window.addEventListener('load', getLocal)

document.addEventListener('keydown',e=>{
  if(e.key === "Enter"){
    let value=cityInput.value
    citydata=value
    getWeather()
  }
})
async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citydata}&lang=ru&appid=775cd61e51d59f8fabb9fb66aaa6fb60&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp}°C`;
    humiditydata.textContent = `Humidity: ${data.main.humidity}%`;
    winddata.textContent = `Wind speed: ${data.wind.speed}m/s`
    weatherDescription.textContent = data.weather[0].description;
  }
  getWeather()