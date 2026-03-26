const BASE_URL = "https://api.openweathermap.org/data/2.5/weather?"
const apiKey = "8a4db8f43d36d3283efb288beafee867"

const btn = document.querySelector(".search button");
const input = document.querySelector(".search input");
const iconWeather = document.querySelector(".iconWeather");
const temp = document.querySelector(".temp");
const cityName = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");

async function getWeather(city){
    try{
        const response = await fetch(`${BASE_URL}q=${city}&appid=${apiKey}&units=metric`);
        
        const data = await response.json()
        console.log(data);

    temp.innerText = Math.round(data.main.temp) + "°C";
    cityName.innerText = data.name;
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + " km/h";

    const weatherMain = data.weather[0].main;

        if (weatherMain === "Clouds") {
            iconWeather.src = "images/clouds.png";
        } else if (weatherMain === "Clear") {
            iconWeather.src = "images/clear.png";
        } else if (weatherMain === "Mist") {
            iconWeather.src = "images/mist.png";
        } else if (weatherMain === "Snow") {
            iconWeather.src = "images/snow.png";
        } else if (weatherMain === "Rain") {
            iconWeather.src = "images/rain.png";
        } else if (weatherMain === "Drizzle") {
            iconWeather.src = "images/drizzle.png";
        }
     } catch (error) {
        console.log(error);
        alert("Something went wrong");
    }    
}


btn.addEventListener("click", () => {
    const cityValue = input.value;
    getWeather(cityValue);

});