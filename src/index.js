function updateWeather(response) {
  let temperatureelement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let Cityelement = document.querySelector("#city");

  Cityelement.innerHTML = response.data.city;
  temperatureelement.innerHTML = Math.round(temperature);
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
