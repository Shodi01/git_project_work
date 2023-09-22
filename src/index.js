//let city = prompt("Please enter your city.");
//city.toLowerCase();
let weather = {};
let town = document.querySelector("h2");
let describe = document.querySelector("h3");
let temp = document.querySelector("h4");
let apiKey = "eae061c95483dd066657bfc7525418ed";
let city = document.querySelector("#city");
let link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

let current = new Date();
let time = document.querySelector("h1");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[current.getDay()];

let hours = current.getHours();
let minutes = current.getMinutes();

function showTemp(response) {
  if (city === response.data.main) {
    town.innerHTML = response.data.main;
    temp.innerHTML = response.data.main.temp;
  } else if (city === null) {
    alert(
      `Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
    );
  } /*else if (){
  }*/
}

function currentTime(event) {
  event.preventDefault();
  time.innerHTML = day + " " + hours + ":" + minutes;
  axios.get(`${link}&appId${apiKey}`).then(showTemp);
}
/* if (city === "Paris") {
    weather.temperature = "18°C";
    town.innerHTML = "Paris";
    describe.innerHTML = "Partly cloudy";
    temp.innerHTML = "18°C";
    alert("It is currently 18°C (64°F) in Paris with a humidity of 80%");
  } else if (city === "Pretoria") {
    weather.temperature = "22°C";
    town.innerHTML = "Pretoria";
    describe.innerHTML = "Clear";
    temp.innerHTML = "22°C";
    alert("It is currently 22°C (72°F) in Pretoria.");
  } else if (city === "Dublin") {
    weather.temperature = "15°C";
    town.innerHTML = "Dublin";
    describe.innerHTML = "Windy";
    temp.innerHTML = "15°C";
    alert("It is currently 15°C (59°F) in Dublin with winds of 20km/hr speed.");
  } else if (city === "Miami") {
    weather.temperature = "24°C";
    town.innerHTML = "Miami";
    describe.innerHTML = "Clear";
    temp.innerHTML = "24°C";
    alert("It is currently 24°C (75°F) in Miami with a humidity of 65%");
  } else if (city === "Cairo") {
    weather.temperature = "30°C";
    town.innerHTML = "Cairo";
    describe.innerHTML = "Clear";
    temp.innerHTML = "30°C";
    alert(
      "It is currently 30°C (86°F) in Cairo with winds picking up after sunset."
    );
  } else if (city === "London") {
    weather.temperature = "12°C";
    town.innerHTML = "London";
    describe.innerHTML = "Drizzle";
    temp.innerHTML = "12°C";
    alert(
      "It is currently 12°C (54°F) in London with rain shortly to start after 4pm."
    );
  } */

let info = document.querySelector("#button-addon2");
info.addEventListener("click", currentTime);

//day.innerHTML = current.getDay + current.getTime;
/*

*/
