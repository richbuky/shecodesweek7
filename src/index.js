function updateWeather(response) {
  let temperatureelement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let Cityelement = document.querySelector("#city");
  let descriptionelement = document.querySelector("#description");
  let humidityelement = document.querySelector("#humidity");
  let windspeedelement = document.querySelector("#wind-speed");
  let timeelement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  Cityelement.innerHTML = response.data.city;
  timeelement.innerHTML = formatDate(date);
  descriptionelement.innerHTML = response.data.condition.description;
  humidityelement.innerHTML = `${response.data.temperature.humidity}%,`;
  windspeedelement.innerHTML = `${response.data.wind.speed}km/hr`;
  timeelement.innerHTML = response.data.temperatureelement.innerHTML =
    Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}: ${minutes}`;
}

function Searchcity(city) {
  let apikey = "b2a5adcct04b33178913oc335f405433";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function FormSubmit(event) {
  event.preventDefault();
  let SearchInput = document.querySelector("#search-form-input");

  Searchcity(SearchInput.value);
}

let Searchformelement = document.querySelector("#search-form");
Searchformelement.addEventListener("submit", FormSubmit);

Searchcity("Lagos");
